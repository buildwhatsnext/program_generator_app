import { PayloadAction } from "@reduxjs/toolkit";
import { MiddlewareAPI, Dispatch, Action, AnyAction } from "redux";
import { AppThunk, RootState } from '../store';
import { setRsf, setNetArea, setCirculation, setPlanning, setTotalNumberOfWorkseats, setWorkseatRatio, setCollaborationRatio, } from '../features/project/project.slice';
import { 
  setAmenityData, 
  setBroadcastData, 
  setEnclosedData, 
  setLabData, 
  setMeetingData, 
  setOpenOfficeData, 
  setSupportData, 
  setHoldArea, 
  setUnprogrammedArea
} from "../features/space/space.slice";
import { 
  calculateCollaborationRatio, 
  calculateHoldArea, 
  calculateTotalWorkseats, 
  calculateUnplannedArea, 
  calculateWorkseatRatio, 
  calculateWorkspaceArea,
  sumTotals
} from "../../shared/lib/calculators";
import { tryConvertToNumber } from "../../shared/lib/conversion";
import { hydrateSpaceState } from "../features/space/space.functions";
import { Space } from "../../shared/types/Space";
import SpaceType from "../../shared/types/SpaceType";

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
