import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunkConfig, RootState } from '../../store';
import { ProjectOverview } from './project.overview';
import { tryConvertToNumber } from '../../../shared/lib/conversion';
import { IProject } from '../../../shared/types/Project';

const project = {...new ProjectOverview()};

export const createProject = createAsyncThunk(
  'project/createProject',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

export const loadProject = createAsyncThunk<any, IProject>(
  'project/loadProject',
  async (projectData, thunkAPI) => {
    try {
      console.log('Loading project...')
      const { id } = projectData;
      const response = await fetch(`/api/projects/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

export const saveProject = 
  createAsyncThunk<any, void, AppThunkConfig>(
  'project/saveProject',
  async (_, thunkAPI) => {
    try {
      console.log('Attempting to send save request');
      const projectData = thunkAPI.getState().project;
      const response = await fetch(`/api/projects/${projectData.id}`, {
        method: 'PUT',
        body: JSON.stringify(projectData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

const projectSlice = createSlice({
  name: 'project',
  initialState: project,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setClient: (state, action) => {
      const value = action?.payload ?? 'unknown'

      state.client = value;
    },
    setUnits: (state, action) => {
      const value = action?.payload ?? 'unknown'

      state.units = value;
    },
    setTenancy: (state, action) => {
      const value = action?.payload ?? 'unknown'

      state.tenancy = value;
    },
    setBroadcast: (state, action) => {
      const value = action?.payload && (action.payload.toString().toLowerCase() === 'yes' || action.payload === true)
      state.hasBroadcast = value;
    },
    setLab: (state, action) => {
      const value = action?.payload && (action.payload.toString().toLowerCase() === 'yes' || action.payload === true)
      state.hasLab = value;
    },
  },
});

export default projectSlice.reducer;

export const selectOverview = (state: RootState) => state.project;

export const { 
  setId,
  setClient, 
  setUnits, 
  setTenancy, 
  setBroadcast, 
  setLab,
} = projectSlice.actions;
