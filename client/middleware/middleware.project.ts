import { MiddlewareAPI, Dispatch, Action, AnyAction } from "redux";
import { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { createProject, loadProject, setBroadcast, setClient, setId, setLab, setTenancy, setUnits } from "../features/project/project.slice";
import { IProject } from "../../shared/types/Project";

function setProjectData(data: IProject, api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) {
  api.dispatch(setId(data.id))
  api.dispatch(setClient(data.client));
  api.dispatch(setLab(data.hasLab));
  api.dispatch(setBroadcast(data.hasBroadcast));
  api.dispatch(setTenancy(data.tenancy));
  api.dispatch(setUnits(data.units));
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
