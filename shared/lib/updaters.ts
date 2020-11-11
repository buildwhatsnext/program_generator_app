import { setNetArea } from "../../client/features/project/project.slice";
import { setHoldArea, setTotalBuildingArea, setUnprogrammedArea } from '../../client/features/space/space.slice';
import { AppThunk } from "../../client/store"

export const updateBuildingArea = (
  area: any
): AppThunk => (dispatch, getState) => {
  dispatch(setTotalBuildingArea(area));
  dispatch(setNetArea(area));
}

export const updateAreaOnHold = ()
: AppThunk => (dispatch, getState) => {
  const { targetFactorCirculation, targetFactorLoss } = getState().project;
  const { totalAreaBuilding, } = getState().program;

  const factorTotal = targetFactorCirculation + targetFactorLoss;
  const percentage = factorTotal / 100;
  const areaHold = totalAreaBuilding * percentage;
  const areaLeftover = totalAreaBuilding - areaHold;
  dispatch(setHoldArea(areaHold));
  dispatch(setUnprogrammedArea(areaLeftover));
}