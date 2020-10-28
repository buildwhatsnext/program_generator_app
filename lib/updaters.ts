import { setNetArea } from "../features/info/info.slice";
import { setTotalBuildingArea } from '../features/space/space.slice';
import { AppThunk } from "../store"

export const updateBuildingArea = (
  area: any
): AppThunk => dispatch => {
  // dispatch(setTotalBuildingArea(area));
  dispatch(setNetArea(area));
}