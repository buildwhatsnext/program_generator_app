import { Guid } from 'guid-typescript';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Program } from '../../components/spaces/Program';
import { tryConvertToNumber } from '../../lib/conversion';
import { EnclosedOfficeSpace, Space } from '../../components/spaces/Space';

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
    },
    setEnclosedData: (state, action: PayloadAction<string[]>) => {
      const input = action.payload;
      state.EnclosedState = input;
    }
  },
});

export default programSlice.reducer;

export const selectProgram = (state: RootState) => state.program;

export const { 
  // calculateUnplanned,
  setTotalBuildingArea,
  setUnprogrammedArea, 
  setHoldArea,
  setEnclosedData
} = programSlice.actions;

export function dehydrateSpaceData<T extends Space>(elements: T[]) {
  const serialized = elements.map(space => {
    const reduced = JSON.stringify(space);
    return reduced;
  })

  return serialized;
}