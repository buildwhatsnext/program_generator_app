import { ActionCreatorWithOptionalPayload, PayloadAction } from "@reduxjs/toolkit";
import { MiddlewareAPI, Dispatch, Action, AnyAction } from "redux";
import { setAmenityData, setBroadcastData, setEnclosedData, setEnclosedTotalArea, setLabData, setMeetingData, setOpenOfficeData, setSupportData } from "../features/space/space.slice";
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

export const calculateTotalSpatialArea = (
    data: string[], 
    areaHandler: ActionCreatorWithOptionalPayload<any, string>
  ): AppThunk => 
  (dispatch, getState) => {
    const spaces = data?.map(space => JSON.parse(space));
    let finalArea = 0;
    spaces?.forEach((space) => finalArea += Number(space.areaTotal));
    console.log(finalArea);
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

export const filterSpaces = (action: PayloadAction<Partial<SpaceModel>[]>, api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) =>{
  const data = action.payload;

  const dataAmenity = data.filter(space => space.type === SpaceType.Amenity).map(space => JSON.stringify(space));
  api.dispatch(setAmenityData(dataAmenity));
  const dataBroadcast = data.filter(space => space.type === SpaceType.Broadcast).map(space => JSON.stringify(space));
  api.dispatch(setBroadcastData(dataBroadcast));
  const dataEnclosed = data.filter(space => space.type === SpaceType.Enclosed).map(space => JSON.stringify(space));
  api.dispatch(setEnclosedData(dataEnclosed));
  const dataLab = data.filter(space => space.type === SpaceType.Lab).map(space => JSON.stringify(space));
  api.dispatch(setLabData(dataLab));
  const dataMeeting = data.filter(space => space.type === SpaceType.Meeting).map(space => JSON.stringify(space));
  api.dispatch(setMeetingData(dataMeeting));
  const dataOpenPlan = data.filter(space => space.type === SpaceType.OpenPlan).map(space => JSON.stringify(space));
  api.dispatch(setOpenOfficeData(dataOpenPlan));
  const dataSupport = data.filter(space => space.type === SpaceType.Support).map(space => JSON.stringify(space));
  api.dispatch(setSupportData(dataSupport));
}

const spaceCalculator = (api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => (next: Dispatch) => (action: Action) => {
  switch(action.type) {
    case setSpaceData.type:
      filterSpaces(action as PayloadAction<Partial<SpaceModel>[]>, api)
      break;
    default:
      break;
  }

  return next(action);
};

export default spaceCalculator;
