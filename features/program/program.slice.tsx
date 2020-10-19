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
  },
});

export const { setClient, setUnits, setTenancy, setBroadcast, setLab } = programSlice.actions;

export default programSlice.reducer;

export const selectProgram = (state: RootState) => state.program;