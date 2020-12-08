import { AppThunk, RootState } from '../../client/store';
import { setNetArea } from "../../client/features/project/project.slice";
import { setHoldArea, setTotalBuildingArea, setUnprogrammedArea } from '../../client/features/space/space.slice';
import SpaceModel from "../../server/models/model.space";

// TODO: document this function

/**
 * @summary if there isn't any area, proceed to AppThunk and proceeds to dispatch setTotalBuildingArea's and setNetArea's area data.
 */

export const updateBuildingArea = (
  area: any
): AppThunk => (dispatch, getState) => {
  dispatch(setTotalBuildingArea(area));
  dispatch(setNetArea(area));
}

// TODO: document this function

/**
 * @summary getting numerical data from targetFactorCirculation, targetFactorLoss, totalAreaContainer and goes thorough a set of calcuation to get area 
 */
export const updateAreaOnHold = (): AppThunk => (dispatch, getState) => {
  const { targetFactorCirculation, targetFactorLoss } = getState().project;
  const { totalAreaContainer, } = getState().program;

  const factorTotal = targetFactorCirculation + targetFactorLoss;
  const percentage = factorTotal / 100;
  console.log(totalAreaContainer);
  
  const areaHold = Number((totalAreaContainer * percentage).toFixed(2));
  console.log(areaHold);

  const areaLeftover = totalAreaContainer - areaHold;
  console.log(areaLeftover);
  
  dispatch(setHoldArea(areaHold));
  dispatch(setUnprogrammedArea(areaLeftover));
}
