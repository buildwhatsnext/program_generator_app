import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunkConfig, RootState } from '../../store';
import { tryConvertToNumber } from '../../../shared/lib/conversion';
import { IProject, Project } from '../../../shared/types/Project';

const project = {...new Project()};

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

export const saveProject = createAsyncThunk<any, void, AppThunkConfig>(
  'project/saveProject',
  async (_, thunkAPI) => {
    try {
      console.log('Attempting to send save request');
      const projectData = thunkAPI.getState().project;
      const spaceData = thunkAPI.getState().program;
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
    setRsf: (state, action) => {
      state.areaGross = Number(action.payload);
    },
    setNetArea: (state, action) => {
      console.log('Setting net area')
      const input = tryConvertToNumber(action.payload);
      state.areaNet = input;
    },
    setFloorCount: (state, action) => {
      state.floors = Number(action.payload);
    },
    setCirculation: (state, action) => {
      const input = Number(action.payload);
      state.targetFactorCirculation = input;
    },
    setPlanning: (state, action) => {
      const input = Number(action.payload);
      state.targetFactorLoss = input;
    },
    setWorkseatArea: (state, action) => {
      const input = Number(action.payload);
      state.targetAreaPerWorkseat = input;
    },
    setWorkseatTarget: (state, action) => {
      const input = Number(action.payload);
      state.targetNumOfWorkseats = input;
    },
    setTotalProgrammedArea: (state, action) => {
      const input = Number(action.payload);
      state.totalProgrammedArea = input;
    },
    setWorkseatRatio: (state, action) => {
      const input = Number(action.payload);
      state.totalWorkseatRatio = action.payload;
    },
    setTotalNumberOfWorkseats: (state, action) => {
      const input = Number(action.payload);
      state.totalNumOfWorkseats = input;
    },
    setCollaborationRatio: (state, action) => {
      const input = Number(action.payload);
      state.totalCollaborationRatio = action.payload;
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
  setRsf,
  setNetArea,
  setFloorCount,
  setCirculation,
  setPlanning,
  setWorkseatArea,
  setWorkseatTarget,
  setTotalProgrammedArea,
  setWorkseatRatio,
  setTotalNumberOfWorkseats,
  setCollaborationRatio
} = projectSlice.actions;
