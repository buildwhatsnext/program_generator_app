import { useDispatch } from 'react-redux';
import { MiddlewareAPI, Dispatch, Action, AnyAction } from "redux";
import { PayloadAction } from '@reduxjs/toolkit';
import { createProject } from "../features/settings/session.slice";
import { AppThunk, RootState } from '../store';
import { setBroadcast, setClient, setLab, setTenancy } from "../features/info/info.slice";
import { IProject } from "../../shared/types/Project";

function setProjectData(data: IProject, api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) {
  const { client, hasLab, hasBroadcast, name, tenancy } = data;
  api.dispatch(setClient(client));
  api.dispatch(setLab(hasLab));
  api.dispatch(setBroadcast(hasBroadcast));
  api.dispatch(setTenancy(tenancy));
}

function handleProjectCreation(action: PayloadAction<IProject>, api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) {
  setProjectData(action.payload, api);
}

const projectHandler = 
  (api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => 
  (next: Dispatch) => (action: PayloadAction<IProject>) => {
    switch(action.type) {
      case createProject.fulfilled.type: 
        // handleProjectCreation(action, api)
        break;
      default:
        break;
    }

    return next(action);
}

export default projectHandler;
