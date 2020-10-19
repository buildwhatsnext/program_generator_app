import { Guid } from 'guid-typescript';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import bldgData from './program.data';

// const initialData = new BuildingProgram();

const programSlice = createSlice({
  name: 'program',
  initialState: bldgData,
  reducers: {
    setClient: (state, action) => {
      state.overview.general.client = action.payload;
    },
    setUnits: (state, action) => {
      state.overview.general.units = action.payload;
    },
    setTenancy: (state, action) => {
      state.overview.general.tenancy = action.payload;
    },
    setBroadcast: (state, action) => {
      state.overview.general.hasBroadcast = action.payload.toString().toLowerCase() === 'yes';
    },
    setLab: (state, action) => {
      state.overview.general.hasLab = action.payload.toString().toLowerCase() === 'yes';
    },
    setRsf: (state, action) => {
      state.overview.basic.area_gross = Number(action.payload);
    },
    setLossFactor: (state, action) => {
      state.overview.basic.area_gross = Number(action.payload);
    },
    setFloorCount: (state, action) => {
      state.overview.basic.floors = Number(action.payload);
    },
    setCirculation: (state, action) => {
      state.overview.basic.floors = Number(action.payload);
    },
    setPlanning: (state, action) => {
      state.overview.basic.floors = Number(action.payload);
    },
    setWorkseatArea: (state, action) => {
      state.overview.basic.floors = Number(action.payload);
    },
    setWorkseatTarget: (state, action) => {
      state.overview.basic.floors = Number(action.payload);
    },
  },
});

export default programSlice.reducer;

export const selectProgram = (state: RootState) => state.program;

export const { 
  setClient, 
  setUnits, 
  setTenancy, 
  setBroadcast, 
  setLab,
  setRsf,
  setLossFactor,
  setFloorCount,
  setCirculation,
  setPlanning,
  setWorkseatArea,
  setWorkseatTarget 
} = programSlice.actions;