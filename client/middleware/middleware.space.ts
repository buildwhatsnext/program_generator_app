import { ActionCreatorWithOptionalPayload, PayloadAction } from "@reduxjs/toolkit";
import { MiddlewareAPI, Dispatch, Action, AnyAction } from "redux";
import { setAmenityData, setAmenityTotalArea, setBroadcastData, setBroadcastTotalArea, setEnclosedData, setEnclosedTotalArea, setLabData, setLabTotalArea, setMeetingData, setMeetingTotalArea, setOpenOfficeData, setOpenOfficeTotalArea, setSupportData, setSupportTotalArea } from "../features/space/space.slice";
import { 
  setCollaborationRatio, 
  setSpaceData, 
  setTotalNumberOfWorkseats, 
  setTotalProgrammedArea, 
  setWorkseatRatio 
} from '../features/project/project.slice';

import { AppThunk, RootState } from '../store';
import { filterAllSpaceDataByType, hydrateSpaceState, SpaceCollection } from "../features/space/space.functions";
import SpaceModel from "../../server/models/model.space";
import SpaceType from "../../shared/types/SpaceType";
import { updateAreaOnHold } from "../../shared/lib/updaters";
import { sumTotals } from "../../shared/lib/calculators";

export const calculateTotalSpatialArea = (
    data: string[], 
    areaHandler: ActionCreatorWithOptionalPayload<any, string>
  ): AppThunk => 
  (dispatch, getState) => {
    if(data === undefined || data === null || data.length < 1)
      return;

    const spaces = data?.map<SpaceModel>(space => JSON.parse(space));
    const finalArea = spaces?.map(space => space.areaTotal).reduce(sumTotals)
    dispatch(areaHandler(finalArea))
}

export const calculateTotalProgrammedArea = (): AppThunk => 
  (dispatch, getState) => {
    
    const {
      totalAreaEnclosed,
      totalAreaOpen,
      totalAreaMeeting,
      totalAreaAmenity,
      totalAreaSupport,
      totalAreaBroadcast,
      totalAreaLab,
    } = getState().program;

    
    const allPrograms = [
      totalAreaEnclosed,
      totalAreaOpen,
      totalAreaMeeting,
      totalAreaAmenity,
      totalAreaSupport,
      totalAreaBroadcast,
      totalAreaLab,
    ];

    let total = 0;
    allPrograms?.forEach((area) => {
      console.log(area);
      total += area
    });

    dispatch(setTotalProgrammedArea(total))
}

const calculateTotalSeats = (all: string[][]) => {
  let seats = 0;

  all?.forEach((state) => {
    const spaceState = hydrateSpaceState(state);
    spaceState?.forEach((space) => {
      seats += space.seatTotal
    })
  });

  return seats;
}

export const calculateTotalWorkseats = (): AppThunk => 
  (dispatch, getState) => {
  const {
    AmenityState,
    BroadcastState,
    EnclosedState,
    MeetingState,
    LabState,
    OpenPlanState,
    SupportState
  } = getState().program;

  const all = [
    // AmenityState,
    // BroadcastState,
    EnclosedState,
    // MeetingState,
    // LabState,
    OpenPlanState,
    // SupportState
  ];

  const seats = calculateTotalSeats(all);

  dispatch(setTotalNumberOfWorkseats(seats));
}

export const calculateCollaborationRatio = (): AppThunk => 
  (dispatch, getState) => {
  const {
    AmenityState,
    BroadcastState,
    EnclosedState,
    MeetingState,
    LabState,
    OpenPlanState,
    SupportState
  } = getState().program;
  const { totalNumOfWorkseats, totalProgrammedArea } = getState().project;

  const all = [
    // AmenityState,
    // BroadcastState,
    // EnclosedState,
    MeetingState,
    // LabState,
    // OpenPlanState,
    // SupportState
  ];

  const meetingSeats = calculateTotalSeats(all);
  const ratio = (meetingSeats / totalNumOfWorkseats).toFixed(2);

  dispatch(setCollaborationRatio(ratio));
}

export const calculateWorkseatRatio = (): AppThunk => 
(dispatch, getState) => {
  const { totalNumOfWorkseats, totalProgrammedArea } = getState().project;

  const ratio = (totalNumOfWorkseats / totalProgrammedArea).toFixed(2);
  console.log(ratio);

  dispatch(setWorkseatRatio(ratio.toString()));
}

const loadSpaceData = (
  api: MiddlewareAPI<Dispatch<AnyAction>, RootState>, 
  data: SpaceCollection
) => {
  api.dispatch(setAmenityData(data.amenity?.map(s => JSON.stringify(s))));
  api.dispatch(setBroadcastData(data.broadcast?.map(s => JSON.stringify(s))));
  api.dispatch(setEnclosedData(data.enclosed?.map(s => JSON.stringify(s))));
  api.dispatch(setLabData(data.lab?.map(s => JSON.stringify(s))));
  api.dispatch(setMeetingData(data.meeting?.map(s => JSON.stringify(s))));
  api.dispatch(setOpenOfficeData(data.open?.map(s => JSON.stringify(s))));
  api.dispatch(setSupportData(data.support?.map(s => JSON.stringify(s))));
}

const loadSpaceAreas = (
  api: MiddlewareAPI<Dispatch<AnyAction>, RootState>, 
  data: SpaceCollection
) => {
  api.dispatch(setAmenityTotalArea(data.amenity.length > 0 ? data.amenity?.map(s => s.areaTotal)?.reduce(sumTotals) : 0));
  api.dispatch(setBroadcastTotalArea(data.broadcast.length > 0 ? data.broadcast?.map(s => s.areaTotal)?.reduce(sumTotals) : 0));
  api.dispatch(setEnclosedTotalArea(data.enclosed.length > 0 ? data.enclosed?.map(s => s.areaTotal)?.reduce(sumTotals) : 0));
  api.dispatch(setLabTotalArea(data.lab.length > 0 ? data.lab?.map(s => s.areaTotal)?.reduce(sumTotals) : 0));
  api.dispatch(setMeetingTotalArea(data.meeting.length > 0 ? data.meeting?.map(s => s.areaTotal)?.reduce(sumTotals) : 0));
  api.dispatch(setOpenOfficeTotalArea(data.open.length > 0 ? data.open?.map(s => s.areaTotal)?.reduce(sumTotals) : 0));
  api.dispatch(setSupportTotalArea(data.support.length > 0 ? data.support?.map(s => s.areaTotal)?.reduce(sumTotals) : 0));
}

export const handleSpaceLoading = (
  action: PayloadAction<Partial<SpaceModel>[]>, 
  api: MiddlewareAPI<Dispatch<AnyAction>, RootState>
) => {
  const data = action.payload;

  if(data === null || data === undefined)
    return;
    
  const spaces = filterAllSpaceDataByType(data);
  loadSpaceAreas(api, spaces);
  loadSpaceData(api, spaces);
}

const spaceCalculator = (api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => (next: Dispatch) => (action: Action) => {
  switch(action.type) {
    case setSpaceData.type:
      handleSpaceLoading(action as PayloadAction<Partial<SpaceModel>[]>, api)
      break;
    default:
      break;
  }

  return next(action);
};

export default spaceCalculator;
