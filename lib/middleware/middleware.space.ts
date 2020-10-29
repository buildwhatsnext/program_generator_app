import { MiddlewareAPI, Dispatch, Action, AnyAction } from "redux";
import { EnclosedOfficeSpace } from "../../components/spaces/Space";
import { setEnclosedData, setEnclosedTotalArea } from "../../features/space/space.slice";

import { RootState } from '../../store';

function handleAreaUpdates(api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) {
  const { dispatch, getState } = api;
  const { program } = getState();

  const enclosed = program.EnclosedState.map(space => {
    const hydrated: EnclosedOfficeSpace = JSON.parse(space);
    return hydrated;
  });

  let finalArea = 0;
  enclosed.forEach((space) => finalArea += space.area);
  console.log(finalArea);

  dispatch(setEnclosedTotalArea(500));
}


const spaceCalculator = (api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => (next: Dispatch) => (action: Action) => {
  switch(action.type) {
    case setEnclosedData.type:
      handleAreaUpdates(api);
      break;
    default:
      break;
  }

  return next(action);
};

export default spaceCalculator;
