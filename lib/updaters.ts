import { setNetArea } from "../features/info/info.slice";
import { setHoldArea, setTotalBuildingArea, setUnprogrammedArea } from '../features/space/space.slice';
import { AppThunk } from "../store"

// TODO: document this function
export const updateBuildingArea = (
  area: any
): AppThunk => (dispatch, getState) => {
  dispatch(setTotalBuildingArea(area));
  dispatch(setNetArea(area));
}

// TODO: document this function
export const updateAreaOnHold = ()
: AppThunk => (dispatch, getState) => {
  const { targetFactorCirculation, targetFactorLoss } = getState().overview;
  const { totalAreaBuilding, } = getState().program;

  const factorTotal = targetFactorCirculation + targetFactorLoss;
  const percentage = factorTotal / 100;
  const areaHold = totalAreaBuilding * percentage;
  const areaLeftover = totalAreaBuilding - areaHold;
  dispatch(setHoldArea(areaHold));
  dispatch(setUnprogrammedArea(areaLeftover));
}