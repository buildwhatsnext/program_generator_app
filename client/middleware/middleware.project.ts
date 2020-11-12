import { MiddlewareAPI, Dispatch, Action, AnyAction } from "redux";
import { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { createProject, loadProject, setBroadcast, setClient, setId, setLab, setTenancy } from "../features/project/project.slice";
import { IProject } from "../../shared/types/Project";

function setProjectData(data: IProject, api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) {
  const { id, client, hasLab, hasBroadcast, name, tenancy } = data;
  api.dispatch(setId(id))
  api.dispatch(setClient(client));
  api.dispatch(setLab(hasLab));
  api.dispatch(setBroadcast(hasBroadcast));
  api.dispatch(setTenancy(tenancy));
}

function handleProjectData(action: PayloadAction<IProject>, api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) {
  setProjectData(action.payload, api);
}

const projectHandler = 
  (api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => 
  (next: Dispatch) => (action: PayloadAction<IProject>) => {
    switch(action.type) {
      case loadProject.fulfilled.type:
      case createProject.fulfilled.type: 
        handleProjectData(action, api)
        break;
      default:
        break;
    }

    return next(action);
}

export default projectHandler;
