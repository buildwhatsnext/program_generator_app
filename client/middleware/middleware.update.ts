import { PayloadAction } from "@reduxjs/toolkit";
import { MiddlewareAPI, Dispatch, Action, AnyAction } from "redux";
import { AppThunk, RootState } from '../store';
import { setNetArea, setCirculation, setPlanning } from '../features/project/project.slice';
import { setHoldArea, setUnprogrammedArea } from "../features/space/space.slice";
import { calculateHoldArea, calculateUnplannedArea } from "../../shared/lib/calculators";
import { tryConvertToNumber } from "../../shared/lib/conversion";

const projectUpdater = (api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => 
  (next: Dispatch) => 
  (action: PayloadAction<number>) => {
  const { targetFactorCirculation, targetFactorLoss, areaNet } = api.getState().project;
  const payload = tryConvertToNumber(action.payload);

  switch(action.type) {
    case setNetArea.type:
      updateArea(payload, targetFactorCirculation, targetFactorLoss, api);
      break;
    case setCirculation.type:
      updateArea(areaNet, payload, targetFactorLoss, api);
      break;
    case setPlanning.type:
      updateArea(areaNet, targetFactorCirculation, payload, api);
      break;
    default:
      break;
  }

  return next(action);
};

export const updateArea = ( 
  totalArea: number,
  circFactor: number,
  lossFactor: number,
  api: MiddlewareAPI<Dispatch<AnyAction>, RootState>
) => {
  const hold = calculateHoldArea(totalArea, circFactor, lossFactor);
  const unplanned = calculateUnplannedArea(totalArea, circFactor, lossFactor);
  
  api.dispatch(setHoldArea(hold));
  api.dispatch(setUnprogrammedArea(unplanned));
}

export default projectUpdater;
