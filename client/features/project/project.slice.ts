import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunkConfig, RootState } from '../../store';
import { convertDataToNumber, tryConvertToNumber } from '../../../shared/lib/conversion';
import { IProject, Project } from '../../../shared/types/Project';
import ProjectModel from '../../../server/models/model.project';
import { ISpace } from '../../../shared/types/ISpace';
import SpaceModel from '../../../server/models/model.space';

const project = {...new ProjectModel()};

export const clearProject = createAsyncThunk(
  'project/clearProject',
  async (_, thunkAPI) => {
    const cleanProject = new ProjectModel();
    cleanProject.id = null;
    return {...cleanProject};
  }
)

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

const getSpacesFromData = (state: RootState) => {
  const spaces: SpaceModel[] = [];

  const {
    EnclosedState,
    OpenPlanState,
    MeetingState,
    AmenityState,
    SupportState,
    BroadcastState,
  } = state.program;

  const all = [
    EnclosedState,
    OpenPlanState,
    MeetingState,
    AmenityState,
    SupportState,
    BroadcastState,
  ];

  if(all.every(type => type.length < 1))
    return null;

  all?.forEach(type => {
    const mapped: SpaceModel[] = type?.map(space => JSON.parse(space));
    spaces.push(...mapped);
  });

  return spaces;
}

export const saveProject = createAsyncThunk<any, void, AppThunkConfig>(
  'project/saveProject',
  async (_, thunkAPI) => {
    try {
      console.log('Attempting to send save request');
      const projectState = thunkAPI.getState().project;
      const projectData = new ProjectModel(projectState);
      const spaces = getSpacesFromData(thunkAPI.getState());

      projectData.spaces = spaces;
      
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
      const value = action?.payload // ?? 'unknown'

      state.client = value;
    },
    setUnits: (state, action) => {
      const value = action?.payload // ?? 'unknown'

      state.units = value;
    },
    setTenancy: (state, action) => {
      const value = action?.payload // ?? 'unknown'

      state.tenancy = value;
    },
    setBroadcast: (state, action) => {
      if(action.payload === null) 
        return;

      const value = action?.payload && (action.payload.toString().toLowerCase() === 'yes' || action.payload === true)
      state.hasBroadcast = value;
    },
    setLab: (state, action) => {
      if(action.payload === null) 
        return;

      const value = action?.payload && (action.payload.toString().toLowerCase() === 'yes' || action.payload === true)
      state.hasLab = value;
    },
    setRsf: (state, action) => {
      const input = convertDataToNumber(action?.payload);

      state.areaGross = input;
    },
    setNetArea: (state, action) => {
      const input = convertDataToNumber(action?.payload);

      state.areaNet = input;
    },
    setFloorCount: (state, action) => {
      const input = convertDataToNumber(action?.payload);

      state.floors = input;
    },
    setCirculation: (state, action) => {
      const input = convertDataToNumber(action?.payload);

      state.targetFactorCirculation = input;
    },
    setPlanning: (state, action) => {
      const input = convertDataToNumber(action?.payload);

      state.targetFactorLoss = input;
    },
    setWorkseatArea: (state, action) => {
      const input = convertDataToNumber(action?.payload);

      state.targetAreaPerWorkseat = input;
    },
    setWorkseatTarget: (state, action) => {
      const input = convertDataToNumber(action?.payload);

      state.targetNumOfWorkseats = input;
    },
    setTotalProgrammedArea: (state, action) => {
      const input = convertDataToNumber(action?.payload);

      state.totalProgrammedArea = input;
    },
    setWorkseatRatio: (state, action) => {
      // const input = convertDataToNumber(action?.payload);

      state.totalWorkseatRatio = action.payload;
    },
    setTotalNumberOfWorkseats: (state, action) => {
      const input = convertDataToNumber(action?.payload);

      state.totalNumOfWorkseats = input;
    },
    setCollaborationRatio: (state, action) => {
      // const input = convertDataToNumber(action?.payload);

      state.totalCollaborationRatio = action.payload;
    },
    setSpaceData: (state, action: PayloadAction<Partial<SpaceModel>[]>) => {
      state.spaces = action.payload;
    }
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
  setCollaborationRatio,
  setSpaceData
} = projectSlice.actions;
