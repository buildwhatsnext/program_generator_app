import { Guid } from 'guid-typescript';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Program } from '../../components/spaces/Program';
import { tryConvertToNumber } from '../../lib/conversion';

const program = {...new Program()}

const programSlice = createSlice({
  name: 'program',
  initialState: program,
  reducers: {
    setTotalBuildingArea: (state, action) => {
      console.log('Setting building area')
      const input = tryConvertToNumber(action.payload);
      state.totalAreaBuilding = input;
    },
    setUnprogrammedArea: (state, action) => {
      const input = tryConvertToNumber(action.payload);
      state.totalAreaUnprogrammed = input;
    },
    setHoldArea: (state, action) => {
      const input = tryConvertToNumber(action.payload);
      state.totalAreaHold = input;
    }
    // calculateUnplanned: (state, action) => {
    //   const { 
    //     totalAreaBuilding, 
    //     targetFactorCirculation, 
    //     targetFactorLoss 
    //   } = action.payload;

    //   const unplanned = targetFactorCirculation + targetFactorLoss;
    //   const percentage = unplanned / 100;
    //   const value = totalAreaBuilding * percentage;
    //   state.totalAreaCirculation = value;
    //   state.totalAreaUnplanned = totalAreaBuilding - value;
    // },
  },
});

export default programSlice.reducer;

export const selectProgram = (state: RootState) => state.program;

export const { 
  // calculateUnplanned,
  setTotalBuildingArea,
  setUnprogrammedArea, 
  setHoldArea,
} = programSlice.actions;