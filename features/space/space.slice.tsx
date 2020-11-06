import { Guid } from 'guid-typescript';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Program } from '../../components/spaces/Program';
import { tryConvertToNumber } from '../../lib/conversion';
import { EnclosedOfficeSpace, Space } from '../../components/spaces/Space';

const program = {...new Program()}

// TODO: document these functions
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
    setAmenityData: (state, action: PayloadAction<string[]>) => {
      const input = action.payload;
      state.AmenityState = input;
    },
    setAmenityTotalArea: (state, action) => {
      const input = action.payload;
      state.totalAreaAmenity = input;
    },
    setBroadcastData: (state, action: PayloadAction<string[]>) => {
      const input = action.payload;
      state.BroadcastState = input;
    },
    setBroadcastTotalArea: (state, action) => {
      const input = action.payload;
      state.totalAreaBroadcast = input;
    },
    setEnclosedData: (state, action: PayloadAction<string[]>) => {
      const input = action.payload;
      state.EnclosedState = input;
    },
    setEnclosedTotalArea: (state, action) => {
      const input = action.payload;
      state.totalAreaEnclosed = input;
    },
    setLabData: (state, action: PayloadAction<string[]>) => {
      const input = action.payload;
      state.LabState = input;
    },
    setLabTotalArea: (state, action) => {
      const input = action.payload;
      state.totalAreaLab = input;
    },
    setMeetingData: (state, action: PayloadAction<string[]>) => {
      const input = action.payload;
      state.MeetingState = input;
    },
    setMeetingTotalArea: (state, action) => {
      const input = action.payload;
      state.totalAreaMeeting = input;
    },
    setOpenOfficeData: (state, action: PayloadAction<string[]>) => {
      const input = action.payload;
      state.OpenPlanState = input;
    },
    setOpenOfficeTotalArea: (state, action) => {
      const input = action.payload;
      state.totalAreaOpen = input;
    },
    setSupportData: (state, action: PayloadAction<string[]>) => {
      const input = action.payload;
      state.SupportState = input;
    },
    setSupportTotalArea: (state, action) => {
      const input = action.payload;
      state.totalAreaSupport = input;
    },
  },
});

export default programSlice.reducer;

export const selectProgram = (state: RootState) => state.program;

export const { 
  // calculateUnplanned,
  setTotalBuildingArea,
  setUnprogrammedArea, 
  setHoldArea,
  setAmenityData,
  setAmenityTotalArea,
  setBroadcastData,
  setBroadcastTotalArea,
  setEnclosedData,
  setEnclosedTotalArea,
  setLabData,
  setLabTotalArea,
  setMeetingData,
  setMeetingTotalArea,
  setOpenOfficeData,
  setOpenOfficeTotalArea,
  setSupportData,
  setSupportTotalArea,
} = programSlice.actions;

export function dehydrateSpaceData<T extends Space>(elements: T[]) {
  const serialized = elements?.map(space => {
    const reduced = JSON.stringify(space);
    return reduced;
  })

  return serialized;
}