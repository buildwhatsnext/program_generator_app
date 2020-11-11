import { MiddlewareAPI, Dispatch, Action, AnyAction } from "redux";
import { createProject } from "../features/settings/session.slice";
import { AppThunk, RootState } from '../store';

function handleProjectCreation(action: Action) {
  console.log(action);
}

const projectHandler = 
  (api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => 
  (next: Dispatch) => (action: Action) => {
    switch(action.type) {
      case createProject.fulfilled.type: 
        handleProjectCreation(action)
        break;
      default:
        break;
    }

    return next(action);
}

export default projectHandler;
