import { ActionCreatorWithOptionalPayload } from "@reduxjs/toolkit";
import { MiddlewareAPI, Dispatch, Action, AnyAction } from "redux";
import { setEnclosedData, setEnclosedTotalArea } from "../../features/space/space.slice";

import { RootState } from '../../store';

export const calculateTotalSpatialArea = 
  (data: string[], areaHandler: ActionCreatorWithOptionalPayload<any, string>) => 
  (dispatch) => {
    const spaces = data?.map(space => JSON.parse(space));
    let finalArea = 0;
    spaces?.forEach((space) => finalArea += Number(space.areaTotal));
    dispatch(areaHandler(finalArea))
}


const spaceCalculator = (api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => (next: Dispatch) => (action: Action) => {
  switch(action.type) {
    case setEnclosedTotalArea.type:
      console.log(`Enclosed space area total is: `, api.getState().program.totalAreaEnclosed)
      break;
    default:
      break;
  }

  return next(action);
};

export default spaceCalculator;
