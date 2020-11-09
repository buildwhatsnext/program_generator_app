import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Session } from './Session';
import { LoadingState } from '../../../shared/types/LoadingStates';

export const loadProjects = createAsyncThunk(
  'session/loadProjects',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('/api/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

const data = new Session();

const sessionSlice = createSlice({
  name: 'session',
  initialState: data,
  reducers: {
    // setCurrentProject: (state, action: PayloadAction<ISession>) => {
    // setCurrentProject: (state, action) => {
    //   state.currentProject = action.payload;
    // },
    // getRecentProjects: (state, action) => {
    //   // state.recentProjects = actio
    // },
  },
  extraReducers: {
    [loadProjects.pending.name]: (state) => {
      state.loading = LoadingState.Loading;
    },
    [loadProjects.rejected.name]: (state) => {
      state.loading = LoadingState.Loading;
    },
    [loadProjects.fulfilled.name]: (state, action) => {
      state.recentProjects = action.payload;
      state.loading = LoadingState.Loaded;
    },
  },
});

// export const { 
//   loadProjects
// } = sessionSlice.actions;

export default sessionSlice.reducer;

export const selectSession = (state: RootState) => state.session;
// export const selectSession = createSelector()
