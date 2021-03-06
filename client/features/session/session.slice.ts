/* eslint-disable dot-notation */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Session } from './Session';
import { LoadingState } from '../../../shared/types/LoadingStates';

const data = {...new Session()};

export const loadProjects = createAsyncThunk(
  'session/loadProjects',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('/api/projects');
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

const sessionSlice = createSlice({
  name: 'session',
  initialState: data,
  reducers: {
  },
  extraReducers: {
    [loadProjects.pending.type]: (state) => {
      state.loading = LoadingState.Loading;
      delete state['error'];
    },
    [loadProjects.rejected.type]: (state, action) => {
      console.log('Error while trying to load projects...')
      state.loading = LoadingState.Error.toString();
      state['error']  = action.payload.error;
    },
    [loadProjects.fulfilled.type]: (state, action) => {
      state.recentProjects = action.payload;
      state.loading = LoadingState.Loaded.toString();
    },
  },
});

export default sessionSlice.reducer;

export const selectSession = (state: RootState) => state.session;
