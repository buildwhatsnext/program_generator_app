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
      state.overview.area.area_total = Number(action.payload);
    },
    setLossFactor: (state, action) => {
      state.overview.basic.area_net = Number(action.payload);
    },
    setFloorCount: (state, action) => {
      state.overview.basic.floors = Number(action.payload);
    },
    setCirculation: (state, action) => {
      const input = Number(action.payload);
      state.overview.basic.factor_circulation = input;
    },
    setPlanning: (state, action) => {
      const input = Number(action.payload);
      state.overview.basic.factor_planning = input;
    },
    setWorkseatArea: (state, action) => {
      state.overview.basic.floors = Number(action.payload);
    },
    setWorkseatTarget: (state, action) => {
      state.overview.basic.floors = Number(action.payload);
    },
    calculateUnplanned: (state) => {
      const total = state.overview.area.area_total;
      const circ = state.overview.basic.factor_circulation;
      const plan = state.overview.basic.factor_planning;
      const unplanned = circ + plan;
      const percentage = unplanned / 100;
      const value = total * percentage;
      state.overview.area.area_unplanned = value;
    }
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
  setWorkseatTarget,
  calculateUnplanned 
} = programSlice.actions;