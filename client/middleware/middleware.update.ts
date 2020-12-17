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
  calculateWorkseatRatio 
} from "../../shared/lib/calculators";
import { tryConvertToNumber } from "../../shared/lib/conversion";
import { hydrateSpaceState } from "../features/space/space.functions";

export const updateProjectArea = (api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => 
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

export const updateSpaceArea = (api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => 
  (next: Dispatch) => 
  (action: PayloadAction<string[]>) => {

    const spaces = hydrateSpaceState(action.payload);

  switch(action.type) {
    case setAmenityData.type:
    case setBroadcastData.type:
    case setEnclosedData.type:
    case setLabData.type:
    case setMeetingData.type:
    case setOpenOfficeData.type:
    case setSupportData.type:
      break;
    default:
      break;
  }
}

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

export const updateRatios = (
  api: MiddlewareAPI<Dispatch<AnyAction>, RootState>
) => {

    const seats = calculateTotalWorkseats();
    const ratioWork = calculateWorkseatRatio();
    const ratioColl = calculateCollaborationRatio();

    api.dispatch(setTotalNumberOfWorkseats(seats));
    api.dispatch(setWorkseatRatio(ratioWork));
    api.dispatch(setCollaborationRatio(ratioColl));
}
