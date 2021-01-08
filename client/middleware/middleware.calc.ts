import { PayloadAction } from "@reduxjs/toolkit";
import { MiddlewareAPI, Dispatch, AnyAction } from "redux";
import { RootState } from '../store';
import { setTotalNumberOfWorkseats, setWorkseatRatio, setCollaborationRatio, setTotalProgrammedArea, } from '../features/project/project.slice';
import { 
  setAmenityData, 
  setBroadcastData, 
  setEnclosedData, 
  setLabData, 
  setMeetingData, 
  setOpenOfficeData, 
  setSupportData,
  setUnprogrammedArea, 
} from "../features/space/space.slice";
import { 
  calculateCollaborationRatio, 
  calculateProgrammedArea, 
  calculateTotalWorkseats, 
  calculateUnprogrammedArea, 
  calculateWorkseatRatio, 
  calculateWorkspaceArea,
  sumTotals
} from "../../shared/lib/calculators";
import { hydrateSpaceState } from "../features/space/space.functions";
import { Space } from "../../shared/types/Space";
import SpaceType from "../../shared/types/SpaceType";

const spaceCalculator = (api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => 
  (next: Dispatch) => 
  (action: PayloadAction<string[]>) => {
  switch(action.type) {
    case setAmenityData.type:
    case setBroadcastData.type:
    case setEnclosedData.type:
    case setLabData.type:
    case setMeetingData.type:
    case setOpenOfficeData.type:
    case setSupportData.type:
      updateRatios(api, action);
      updateProgrammedArea(api, action);
      break;
    default:
      break;
  }

  return next(action);
};

export const updateRatios = (
  api: MiddlewareAPI<Dispatch<AnyAction>, RootState>,
  action: PayloadAction<string[]>
) => {
  const spaces = mergeSpacesFromState(api, action);

  console.log(spaces);
  if(!spaces || spaces.length < 1)
    return;

  const area = calculateWorkspaceArea(spaces);
  const seats = calculateTotalWorkseats(spaces);
  const ratioWork = calculateWorkseatRatio(seats, area);
  const meetingSeats = calculateMeetingSeatTotals(spaces);
  const ratioColl = calculateCollaborationRatio(seats, meetingSeats);

  api.dispatch(setTotalNumberOfWorkseats(seats));
  api.dispatch(setWorkseatRatio(ratioWork));
  api.dispatch(setCollaborationRatio(ratioColl));
}

export const updateProgrammedArea = (
  api: MiddlewareAPI<Dispatch<AnyAction>, RootState>,
  action: PayloadAction<string[]>
) => {
  const spaces = mergeSpacesFromState(api, action);

  const { areaNet } = api.getState().project;
  const { totalAreaHold } = api.getState().program;

  // console.log(spaces);
  if(!spaces || spaces.length < 1)
    return;

  const progArea = calculateProgrammedArea(spaces);
  const remArea = areaNet - totalAreaHold;
  const unprogram = calculateUnprogrammedArea(remArea, spaces);

  api.dispatch(setTotalProgrammedArea(progArea));
  api.dispatch(setUnprogrammedArea(unprogram));
}

export const combineSpaces = (prevState: Partial<Space>[], payload: Partial<Space>[]): Partial<Space>[] => {
  if(!payload || payload.length < 1)
    return prevState;

  const { type } = payload[0];
  const filtered = prevState.filter(space => space.type !== type);
  filtered.push(...payload);

  return filtered;
}

function calculateMeetingSeatTotals(spaces: Partial<Space>[]): number {
  const mSpaces = spaces?.filter(space => space.type === SpaceType.Meeting)

  if(mSpaces.length < 1)
    return 0;

  const seats = mSpaces?.map(space => space.seatTotal);

  if(seats.length <= 1)
    return seats[0] ?? 0;

  const total = seats?.reduce(sumTotals);

  return total;
}

function mergeSpacesFromState(api: MiddlewareAPI<Dispatch<AnyAction>, RootState>, action: PayloadAction<string[]>) {
  // console.log(action);
  if(!action || action.payload === null)
    return null;

  const hydratedPayload = hydrateSpaceState(action.payload);
  const {
    AmenityState,
    BroadcastState,
    EnclosedState,
    MeetingState,
    LabState,
    OpenPlanState,
    SupportState
  } = api.getState().program;

  const allSpaces = [ AmenityState, BroadcastState, EnclosedState, MeetingState, LabState, OpenPlanState, SupportState ];    
  if(!allSpaces || allSpaces.length < 1)
    return hydratedPayload;

  const hydratedAll: Partial<Space>[] = [];
  allSpaces.forEach(cat => {
    const hyd = hydrateSpaceState(cat);

    if(hyd && hyd?.length > 0)
      hydratedAll.push(...hyd)
  });
  
  const combined = combineSpaces(hydratedAll, hydratedPayload)

  return combined;
}

export default spaceCalculator;
