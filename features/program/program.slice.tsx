import { Guid } from 'guid-typescript';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import bldgData from './program.data';
import { 
  IBuildingProgram, 
  BuildingProgram, 
  IGeneralProgramInformation,
} from './program.type';

// const initialData = new BuildingProgram();

const programSlice = createSlice({
  name: 'program',
  initialState: bldgData,
  reducers: {
    setClient: (state, action: PayloadAction<IGeneralProgramInformation>) => {
      state.overview.general.client = action.payload.client;
    },
    setUnits: (state, action: PayloadAction<IGeneralProgramInformation>) => {
      state.overview.general.units = action.payload.units;
    },
    setTenancy: (state, action: PayloadAction<IGeneralProgramInformation>) => {
      state.overview.general.tenancy = action.payload.tenancy;
    },
  },
});

export const { setClient, setUnits, setTenancy } = programSlice.actions;

export default programSlice.reducer;

export const selectProgram = (state: RootState) => state.program;