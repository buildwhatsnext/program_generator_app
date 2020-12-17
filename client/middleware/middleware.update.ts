import { PayloadAction } from "@reduxjs/toolkit";
import { MiddlewareAPI, Dispatch, Action, AnyAction } from "redux";
import { AppThunk, RootState } from '../store';
import { setRsf, setNetArea, setCirculation, setPlanning, setTotalNumberOfWorkseats, setWorkseatRatio, setCollaborationRatio, } from '../features/project/project.slice';
import { setHoldArea, setUnprogrammedArea } from '../features/space/space.slice';
import { 
  calculateCollaborationRatio, 
  calculateHoldArea, 
  calculateTotalWorkseats, 
  calculateUnplannedArea, 
  calculateWorkseatRatio 
} from "../../shared/lib/calculators";

const update = (api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => 
  (next: Dispatch) => 
  (action: PayloadAction<number>) => {
  const { targetFactorCirculation, targetFactorLoss } = api.getState().project;
  const { totalAreaContainer, } = api.getState().program;

  switch(action.type) {
    case setNetArea.type:
      updateArea(action.payload, targetFactorCirculation, targetFactorLoss, api);
      break;
    case setCirculation.type:
      updateArea(totalAreaContainer, action.payload, targetFactorLoss, api);
      break;
    case setPlanning.type:
      updateArea(totalAreaContainer, targetFactorCirculation, action.payload, api);
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

export default update;