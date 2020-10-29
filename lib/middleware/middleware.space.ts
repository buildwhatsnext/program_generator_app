import { MiddlewareAPI, Dispatch, Action, AnyAction } from "redux";
import { setClient } from "../../features/info/info.slice";
import { RootState } from '../../store';

const spaceCalculator = (api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => (next: Dispatch) => (action: Action) => {
  switch(action.type) {
    case setClient.type:
      console.log('Client changes only');
      break;
    default:
      break;
  }

  return next(action);
};

export default spaceCalculator;
