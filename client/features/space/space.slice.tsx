import { Guid } from 'guid-typescript';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { ProgramState } from '../../../shared/types/Program';
import { tryConvertToNumber } from '../../../shared/lib/conversion';
import { Space } from '../../../shared/types/Space';

const program = {...new ProgramState()}

// TODO: document these functions
const programSlice = createSlice({
  name: 'program',
  initialState: program,
  reducers: {
    /**
     * @param state: number
     * @param action: turning a data that we get from payload into a numerical data
     * @summary this function sets the building's total area
     */
    setTotalBuildingArea: (state, action) => {
      console.log('Setting building area')
      const input = tryConvertToNumber(action.payload);
      state.totalAreaContainer = input;
    },

    /**
     * @param state: number
     * @param action: turning a data that we get from payload into a numerical data
     * @summary whats the difference between hold vs unprogrammed?
     */
    setUnprogrammedArea: (state, action) => {
      const input = tryConvertToNumber(action.payload);
      state.totalAreaUnprogrammed = input;
    },

    /**
     * @param state: number
     * @param action: turning a data that we get from payload into a numerical data
     * @summary whats the difference between hold vs unprogrammed?
     */
    setHoldArea: (state, action) => {
      const input = tryConvertToNumber(action.payload);
      state.totalAreaHold = input;
    },

    /**
     * @param state: string
     * @param action: 
     * @summary what does this do?
     */
    setAmenityData: (state, action: PayloadAction<string[]>) => {
      const input = action.payload;
      state.AmenityState = input;
    },

    /**
     * @param state: number
     * @param action: 
     * @summary turning the data from the payload into a input which becomes a state for this function
     */
    setAmenityTotalArea: (state, action) => {
      const input = action.payload;
      state.totalAreaAmenity = input;
    },

    /**
     * @param state: string
     * @param action: yadda yadda
     * @summary what does this do?
     */
    setBroadcastData: (state, action: PayloadAction<string[]>) => {
      const input = action.payload;
      state.BroadcastState = input;
    },

    /**
     * @param state: number
     * @param action: yadda yadda
     * @summary what does this do?
     */
    setBroadcastTotalArea: (state, action) => {
      const input = action.payload;
      state.totalAreaBroadcast = input;
    },

    /**
     * @param state: string
     * @param action: yadda yadda
     * @summary what does this do?
     */
    setEnclosedData: (state, action: PayloadAction<string[]>) => {
      const input = action.payload;
      state.EnclosedState = input;
    },

    /**
     * @param state: number
     * @param action: yadda yadda
     * @summary what does this do?
     */
    setEnclosedTotalArea: (state, action) => {
      const input = action.payload;
      state.totalAreaEnclosed = input;
    },

    /**
     * @param state: string
     * @param action: yadda yadda
     * @summary what does this do?
     */
    setLabData: (state, action: PayloadAction<string[]>) => {
      const input = action.payload;
      state.LabState = input;
    },

    /**
     * @param state: number
     * @param action: yadda yadda
     * @summary what does this do?
     */
    setLabTotalArea: (state, action) => {
      const input = action.payload;
      state.totalAreaLab = input;
    },

    /**
     * @param state: string
     * @param action: yadda yadda
     * @summary what does this do?
     */
    setMeetingData: (state, action: PayloadAction<string[]>) => {
      const input = action.payload;
      state.MeetingState = input;
    },

    /**
     * @param state: number
     * @param action: yadda yadda
     * @summary what does this do?
     */
    setMeetingTotalArea: (state, action) => {
      const input = action.payload;
      state.totalAreaMeeting = input;
    },

    /**
     * @param state: string
     * @param action: yadda yadda
     * @summary what does this do?
     */
    setOpenOfficeData: (state, action: PayloadAction<string[]>) => {
      const input = action.payload;
      state.OpenPlanState = input;
    },

    /**
     * @param state: number
     * @param action: yadda yadda
     * @summary what does this do?
     */
    setOpenOfficeTotalArea: (state, action) => {
      const input = action.payload;
      state.totalAreaOpen = input;
    },

    /**
     * @param state: string
     * @param action: yadda yadda
     * @summary what does this do?
     */
    setSupportData: (state, action: PayloadAction<string[]>) => {
      const input = action.payload;
      state.SupportState = input;
    },

    /**
     * @param state: number
     * @param action: yadda yadda
     * @summary what does this do?
     */
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
