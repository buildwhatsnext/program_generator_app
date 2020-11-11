import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Session } from './Session';
import { LoadingState } from '../../../shared/types/LoadingStates';

export const loadProjects = createAsyncThunk(
  'session/loadProjects',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('/api/projects');
      // console.log(response);
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

const data = {...new Session()};

const sessionSlice = createSlice({
  name: 'session',
  initialState: data,
  reducers: {
  },
  extraReducers: {
    [loadProjects.pending.name]: (state) => {
      console.log('Loading projects...')
      console.log(state)
      state.loading = 'loading';
      // state.loading = LoadingState.Loading.toString();
    },
    [loadProjects.rejected.name]: (state) => {
      console.log('Error while trying to load projects...')
      state.loading = 'error';
      // state.loading = LoadingState.Error.toString();
    },
    'session/loadProjects/fulfilled': (state, action) => {
      console.log('Projects loaded!')
      state.loading = 'loaded';
      console.log(action.payload);
      state.recentProjects = action.payload.payload;
      // state.recentProjects = action.payload;
      // state.loading = LoadingState.Loaded.toString();
    },
  },
});

// export const { 
//   loadProjects
// } = sessionSlice.actions;

export default sessionSlice.reducer;

export const selectSession = (state: RootState) => state.session;
