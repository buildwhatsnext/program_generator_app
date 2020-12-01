import { AppThunk, RootState } from '../../client/store';
import { setNetArea } from "../../client/features/project/project.slice";
import { setHoldArea, setTotalBuildingArea, setUnprogrammedArea } from '../../client/features/space/space.slice';
import SpaceModel from "../../server/models/model.space";

// TODO: document this function
export const updateBuildingArea = (
  area: any
): AppThunk => (dispatch, getState) => {
  dispatch(setTotalBuildingArea(area));
  dispatch(setNetArea(area));
}

// TODO: document this function
export const updateAreaOnHold = (): AppThunk => (dispatch, getState) => {
  const { targetFactorCirculation, targetFactorLoss } = getState().project;
  const { totalAreaContainer, } = getState().program;

  const factorTotal = targetFactorCirculation + targetFactorLoss;
  const percentage = factorTotal / 100;
  const areaHold = Number((totalAreaContainer * percentage).toFixed(2));
  const areaLeftover = totalAreaContainer - areaHold;
  dispatch(setHoldArea(areaHold));
  dispatch(setUnprogrammedArea(areaLeftover));
}
