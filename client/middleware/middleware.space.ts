import { ActionCreatorWithOptionalPayload } from "@reduxjs/toolkit";
import { MiddlewareAPI, Dispatch, Action, AnyAction } from "redux";
import { setEnclosedTotalArea } from "../features/space/space.slice";
import { setTotalProgrammedArea } from '../features/info/info.slice';

import { AppThunk, RootState } from '../store';

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
    console.log(allPrograms)

    let total = 0;
    allPrograms?.forEach((area) => {
      console.log(area);
      total += area
    });

    // sets the area in the store/state
    dispatch(setTotalProgrammedArea(total))
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
