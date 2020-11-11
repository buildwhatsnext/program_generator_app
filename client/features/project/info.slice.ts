import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { ProjectOverview } from './project.overview';
import { tryConvertToNumber } from '../../../shared/lib/conversion';

const overview = {...new ProjectOverview()};

const overviewSlice = createSlice({
  name: 'overview',
  initialState: overview,
  reducers: {
    setClient: (state, action) => {
      const value = action?.payload ?? 'unknown'

      state.client = value;
    },
    setUnits: (state, action) => {
      const value = action?.payload ?? 'unknown'

      state.units = value;
    },
    setTenancy: (state, action) => {
      const value = action?.payload ?? 'unknown'

      state.tenancy = value;
    },
    setBroadcast: (state, action) => {
      state.hasBroadcast = action?.payload && action.payload.toString().toLowerCase() === 'yes';
    },
    setLab: (state, action) => {
      state.hasLab = action?.payload && action.payload.toString().toLowerCase() === 'yes';
    },
    setRsf: (state, action) => {
      state.areaGross = Number(action.payload);
    },
    setNetArea: (state, action) => {
      console.log('Setting net area')
      const input = tryConvertToNumber(action.payload);
      state.areaNet = input;
    },
    setFloorCount: (state, action) => {
      state.floors = Number(action.payload);
    },
    setCirculation: (state, action) => {
      const input = Number(action.payload);
      state.targetFactorCirculation = input;
    },
    setPlanning: (state, action) => {
      const input = Number(action.payload);
      state.targetFactorLoss = input;
    },
    setWorkseatArea: (state, action) => {
      const input = Number(action.payload);
      state.targetAreaPerWorkseat = input;
    },
    setWorkseatTarget: (state, action) => {
      const input = Number(action.payload);
      state.targetNumOfWorkseats = input;
    },
    setTotalProgrammedArea: (state, action) => {
      const input = Number(action.payload);
      state.totalProgrammedArea = input;
    },
    setWorkseatRatio: (state, action) => {
      const input = Number(action.payload);
      state.totalWorkseatRatio = action.payload;
    },
    setTotalNumberOfWorkseats: (state, action) => {
      const input = Number(action.payload);
      state.totalNumOfWorkseats = input;
    },
    setCollaborationRatio: (state, action) => {
      const input = Number(action.payload);
      state.totalCollaborationRatio = action.payload;
    },
  },
});

export default overviewSlice.reducer;

export const selectOverview = (state: RootState) => state.overview;

export const { 
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
  setCollaborationRatio
} = overviewSlice.actions;
