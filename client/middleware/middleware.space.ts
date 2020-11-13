import { ActionCreatorWithOptionalPayload } from "@reduxjs/toolkit";
import { MiddlewareAPI, Dispatch, Action, AnyAction } from "redux";
import { setEnclosedTotalArea } from "../features/space/space.slice";
import { 
  setCollaborationRatio, 
  setTotalNumberOfWorkseats, 
  setTotalProgrammedArea, 
  setWorkseatRatio 
} from '../features/building/building.slice';

import { AppThunk, RootState } from '../store';
import { hydrateSpaceState } from "../features/space/space.functions";

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
    spaceState.forEach((space) => {
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
  const { totalNumOfWorkseats, totalProgrammedArea } = getState().building;

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
  const { totalNumOfWorkseats, totalProgrammedArea } = getState().building;

  const ratio = (totalNumOfWorkseats / totalProgrammedArea).toFixed(2);
  console.log(ratio);

  dispatch(setWorkseatRatio(ratio.toString()));

}

const spaceCalculator = (api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => (next: Dispatch) => (action: Action) => {
  switch(action.type) {
    case setEnclosedTotalArea.type:
      // console.log(`Enclosed space area total is: `, api.getState().program.totalAreaEnclosed)
      break;
    default:
      break;
  }

  return next(action);
};

export default spaceCalculator;
