import { MiddlewareAPI, Dispatch, Action, AnyAction } from "redux";
import { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { 
  createProject, 
  loadProject, 
  setBroadcast, 
  setClient, 
  setId, 
  setLab, 
  setTenancy, 
  setUnits,
  setRsf,
  setNetArea,
  setFloorCount,
  setCirculation,
  setPlanning,
  setWorkseatArea,
  setWorkseatTarget,
  setTotalProgrammedArea,
  setWorkseatRatio,
  setTotalNumberOfWorkseats,
  setCollaborationRatio 
} from "../features/project/project.slice";
import { IProject } from "../../shared/types/Project";
import { ProjectOverview } from "../features/project/project.overview";

function setProjectData(data: IProject, api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) {
  if(data === null)
    data = new ProjectOverview();

  api.dispatch(setId(data.id))
  api.dispatch(setClient(data.client));
  api.dispatch(setLab(data.hasLab));
  api.dispatch(setBroadcast(data.hasBroadcast));
  api.dispatch(setTenancy(data.tenancy));
  api.dispatch(setUnits(data.units));
  api.dispatch(setRsf(data.areaGross));
  api.dispatch(setNetArea(data.areaNet));
  api.dispatch(setFloorCount(data.floors));
  api.dispatch(setCirculation(data.targetFactorCirculation));
  api.dispatch(setPlanning(data.targetFactorLoss));
  api.dispatch(setWorkseatArea(data.targetAreaPerWorkseat));
  api.dispatch(setWorkseatTarget(data.targetNumOfWorkseats));
  api.dispatch(setTotalProgrammedArea(data.totalProgrammedArea));
  api.dispatch(setWorkseatRatio(data.totalWorkseatRatio));
  api.dispatch(setTotalNumberOfWorkseats(data.totalNumOfWorkseats));
  api.dispatch(setCollaborationRatio(data.totalCollaborationRatio));
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
