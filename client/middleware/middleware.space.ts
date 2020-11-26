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
import { hydrateSpaceState } from "../features/space/space.functions";
import SpaceModel from "../../server/models/model.space";
import SpaceType from "../../shared/types/SpaceType";
import { updateAreaOnHold } from "../../shared/lib/updaters";

const sumAreaTotals = (total: number, current: number) => total + current;;

export const calculateTotalSpatialArea = (
    data: string[], 
    areaHandler: ActionCreatorWithOptionalPayload<any, string>
  ): AppThunk => 
  (dispatch, getState) => {
    const spaces = data?.map<SpaceModel>(space => JSON.parse(space));
    const finalArea = spaces?.map(space => space.areaTotal).reduce(sumAreaTotals)
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

const filterSpaceByType = (data: Partial<SpaceModel>[] , type: SpaceType) => {
  return data.filter(space => space.type === type);
}

const filterDataBySpaceType = (data: Partial<SpaceModel>[]) => {
  const dataAmenity = data.filter(space => space.type === SpaceType.Amenity).map(space => JSON.stringify(space));
  const dataBroadcast = data.filter(space => space.type === SpaceType.Broadcast).map(space => JSON.stringify(space));
  const dataEnclosed = data.filter(space => space.type === SpaceType.Enclosed).map(space => JSON.stringify(space));
  const dataLab = data.filter(space => space.type === SpaceType.Lab).map(space => JSON.stringify(space));
  const dataMeeting = data.filter(space => space.type === SpaceType.Meeting).map(space => JSON.stringify(space));
  const dataOpenPlan = data.filter(space => space.type === SpaceType.OpenPlan).map(space => JSON.stringify(space));
  const dataSupport = data.filter(space => space.type === SpaceType.Support).map(space => JSON.stringify(space));

  return {
    amenity: dataAmenity,
    broadcast: dataBroadcast,
    enclosed: dataEnclosed,
    lab: dataLab,
    meeting: dataMeeting,
    open: dataOpenPlan,
    support: dataSupport
  }
}

const updateSpaceData = (
  api: MiddlewareAPI<Dispatch<AnyAction>, RootState>, 
  data: {
    amenity: string[]
    broadcast: string[]
    enclosed: string[]
    lab: string[]
    meeting: string[]
    open: string[]
    support: string[]
  }
) => {
  api.dispatch(setAmenityData(data.amenity));
  api.dispatch(setBroadcastData(data.broadcast));
  api.dispatch(setEnclosedData(data.enclosed));
  api.dispatch(setLabData(data.lab));
  api.dispatch(setMeetingData(data.meeting));
  api.dispatch(setOpenOfficeData(data.open));
  api.dispatch(setSupportData(data.support));
}

export const filterSpaces = (
  action: PayloadAction<Partial<SpaceModel>[]>, 
  api: MiddlewareAPI<Dispatch<AnyAction>, RootState>
) => {
  const data = action.payload;
  const spaces = filterDataBySpaceType(data);
  updateSpaceData(api, spaces);
}

export const updateCalculatedSpaceData = (action, api) => {
  console.log('Calculating...');
  api.dispatch(updateAreaOnHold());
  api.dispatch(calculateTotalProgrammedArea());
  api.dispatch(calculateTotalWorkseats());
  api.dispatch(calculateWorkseatRatio());
  api.dispatch(calculateCollaborationRatio());
  console.log('Done!');
}

const updateTotalArea = (
  action: PayloadAction<string[]>, 
  api: MiddlewareAPI<Dispatch<AnyAction>, RootState>,
  type: SpaceType,
  areaHandler: (x: number) => AnyAction,
) => {
  const parsed = action.payload?.map<SpaceModel>(space => JSON.parse(space));

  if(parsed === null)
    return;

  const spaces = filterSpaceByType(parsed, type);
  console.log(spaces);
  if(spaces === null || spaces.length < 1)
    return;

  const totalArea = spaces
    .map(space => Number(space.areaTotal))
    .reduce(sumAreaTotals);

  console.log(totalArea);

  api.dispatch(areaHandler(totalArea));
}


// const updateTotalArea = (
//   action: PayloadAction<Partial<SpaceModel>[]>, 
//   api: MiddlewareAPI<Dispatch<AnyAction>, RootState>,
//   type: SpaceType,
//   areaHandler: (x: number) => AnyAction,
// ) => {
//   console.log(action.payload);
//   const spaces = filterSpaceByType(action.payload, type);
//   console.log(spaces);
//   if(spaces === null || spaces.length < 1)
//     return;

//   const totalArea = spaces
//     .map(space => space.areaTotal)
//     .reduce(sumAreaTotals);

//   console.log(totalArea);

//   api.dispatch(areaHandler(totalArea));
// }


const spaceCalculator = (api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => (next: Dispatch) => (action: Action) => {
  switch(action.type) {
    case setSpaceData.type:
      filterSpaces(action as PayloadAction<Partial<SpaceModel>[]>, api)
      break;
    // case setAmenityData.type:
    //   updateTotalArea(action as PayloadAction<Partial<SpaceModel>[]>, api, SpaceType.Amenity, setAmenityTotalArea)
    //   break;
    // case setBroadcastData.type:
    //   updateTotalArea(action as PayloadAction<Partial<SpaceModel>[]>, api, SpaceType.Broadcast, setBroadcastTotalArea)
    //   break;
    case setEnclosedData.type:
      updateTotalArea(action as PayloadAction<string[]>, api, SpaceType.Enclosed, setEnclosedTotalArea)
      break;
    // case setLabData.type:
    //   updateTotalArea(action as PayloadAction<Partial<SpaceModel>[]>, api, SpaceType.Lab, setLabTotalArea)
    //   break;
    // case setMeetingData.type:
    //   updateTotalArea(action as PayloadAction<Partial<SpaceModel>[]>, api, SpaceType.Meeting, setMeetingTotalArea)
    //   break;
    // case setOpenOfficeData.type:
    //   updateTotalArea(action as PayloadAction<Partial<SpaceModel>[]>, api, SpaceType.OpenPlan, setOpenOfficeTotalArea)
    //   break;
    // case setSupportData.type:
    //   updateTotalArea(action as PayloadAction<Partial<SpaceModel>[]>, api, SpaceType.Support, setSupportTotalArea)
    //   break;
    default:
      break;
  }

  return next(action);
};

export default spaceCalculator;
