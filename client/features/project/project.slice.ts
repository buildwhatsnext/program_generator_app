/* eslint-disable dot-notation */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunkConfig, RootState } from '../../store';
import { convertDataToNumber, tryConvertToNumber } from '../../../shared/lib/conversion';
import LoadableProject from './project.loadable';
import SpaceModel from '../../../server/models/model.space';
import { loadProject } from './project.functions';
import { LoadingState } from '../../../shared/types/LoadingStates';

const project = {...new LoadableProject()};

const projectSlice = createSlice({
  name: 'project',
  initialState: project,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setClient: (state, action) => {
      const value = action?.payload // ?? 'unknown'

      state.client = value;
    },
    setUnits: (state, action) => {
      const value = action?.payload // ?? 'unknown'

      state.units = value;
    },
    setTenancy: (state, action) => {
      const value = action?.payload // ?? 'unknown'

      state.tenancy = value;
    },
    setBroadcast: (state, action) => {
      if(action.payload === null) 
        return;

      const value = action?.payload && (action.payload.toString().toLowerCase() === 'yes' || action.payload === true)
      state.hasBroadcast = value;
    },
    setLab: (state, action) => {
      if(action.payload === null) 
        return;

      const value = action?.payload && (action.payload.toString().toLowerCase() === 'yes' || action.payload === true)
      state.hasLab = value;
    },
    setRsf: (state, action) => {
      const input = convertDataToNumber(action?.payload);

      state.areaGross = input;
    },
    setNetArea: (state, action) => {
      const input = convertDataToNumber(action?.payload);

      state.areaNet = input;
    },
    setFloorCount: (state, action) => {
      const input = convertDataToNumber(action?.payload);

      state.floors = input;
    },
    setCirculation: (state, action) => {
      const input = convertDataToNumber(action?.payload);

      state.targetFactorCirculation = input;
    },
    setPlanning: (state, action) => {
      const input = convertDataToNumber(action?.payload);

      state.targetFactorLoss = input;
    },
    setWorkseatArea: (state, action) => {
      const input = convertDataToNumber(action?.payload);

      state.targetAreaPerWorkseat = input;
    },
    setWorkseatTarget: (state, action) => {
      const input = convertDataToNumber(action?.payload);

      state.targetNumOfWorkseats = input;
    },
    setTotalProgrammedArea: (state, action) => {
      const input = convertDataToNumber(action?.payload);

      state.totalProgrammedArea = input;
    },
    setWorkseatRatio: (state, action) => {
      // const input = convertDataToNumber(action?.payload);

      state.totalWorkseatRatio = action.payload;
    },
    setTotalNumberOfWorkseats: (state, action) => {
      const input = convertDataToNumber(action?.payload);

      state.totalNumOfWorkseats = input;
    },
    setCollaborationRatio: (state, action) => {
      // const input = convertDataToNumber(action?.payload);

      state.totalCollaborationRatio = action.payload;
    },
    setSpaceData: (state, action: PayloadAction<Partial<SpaceModel>[]>) => {
      state.spaces = action.payload;
    }
  },
  extraReducers: {
    [loadProject.pending.type]: (state) => {
      state.loading = LoadingState.Loading;
      delete state['error'];
    },
    [loadProject.rejected.type]: (state, action) => {
      console.log('Error while trying to load projects...')
      state.loading = LoadingState.Error;
      state['error']  = action.payload.error;
    },
    [loadProject.fulfilled.type]: (state, action) => {
      state.loading = LoadingState.Loaded;
    },
  },
});

export default projectSlice.reducer;

export const selectOverview = (state: RootState) => state.project;

export const { 
  setId,
  setClient, 
  setUnits, 
  setTenancy, 
  setBroadcast, 
  setLab,
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
  setCollaborationRatio,
  setSpaceData
} = projectSlice.actions;
