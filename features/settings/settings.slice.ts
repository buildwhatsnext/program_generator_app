import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { AppThunk, RootState } from '../../store';
import data from './settings.data.initial';
import { ISettings } from './settings.type';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: data,
  reducers: {
    modifySetting: (state, action: PayloadAction<ISettings>) => {
      console.log(state);
      console.log(action);
    }
  },
});

export const { modifySetting } = settingsSlice.actions;

export default settingsSlice.reducer;

export const selectSetting = (state: RootState) => state.settings;
