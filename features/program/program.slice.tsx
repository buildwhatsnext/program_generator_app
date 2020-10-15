import { Guid } from 'guid-typescript';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../store';
import bldgData from './program.data';
import { IBuildingProgram, BuildingProgram, IGeneralProgramInformation } from './program.type';

// let initialData: IBuildingProgram;

const programSlice = createSlice({
  name: 'program',
  initialState: bldgData,
  // initialState: new BuildingProgram(),
  reducers: {
    setUnits: (state, action: PayloadAction<IGeneralProgramInformation>) => {
      state.overview.general.units = action.payload.units;
    },
    setTenancy: (state, action: PayloadAction<IGeneralProgramInformation>) => {
      state.overview.general.tenancy = action.payload.tenancy;
    },
  },
});

export const { setUnits, setTenancy } = programSlice.actions;

export default programSlice.reducer;

export const selectProgram = (state: RootState) => state.program;