import { ActionCreatorWithOptionalPayload } from "@reduxjs/toolkit";
import { MiddlewareAPI, Dispatch, Action, AnyAction } from "redux";
import { EnclosedOfficeSpace, Space } from "../../components/spaces/Space";
import { setEnclosedData, setEnclosedTotalArea } from "../../features/space/space.slice";

import { RootState } from '../../store';

// export function handleAreaUpdates(api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) {
//   const { dispatch, getState } = api;
//   const { program } = getState();

//   const enclosed = program.EnclosedState.map(space => {
//     const hydrated: EnclosedOfficeSpace = JSON.parse(space);
//     return hydrated;
//   });

//   let finalArea = 0;
//   enclosed.forEach((space) => finalArea += space.area);
//   console.log(finalArea);

//   dispatch(setEnclosedTotalArea(500));
// }

export const calculateTotalSpatialArea = 
  (data: string[], areaHandler: ActionCreatorWithOptionalPayload<any, string>) => 
  (dispatch) => {
    const spaces = data.map(space => JSON.parse(space));
    let finalArea = 0;
    spaces.forEach((space) => finalArea += Number(space.areaTotal));
    console.log(finalArea);
    // dispatch(setEnclosedTotalArea(finalArea))
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
