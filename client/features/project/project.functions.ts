import { createAsyncThunk } from '@reduxjs/toolkit';
import ProjectModel from '../../../server/models/model.project';
import SpaceModel from '../../../server/models/model.space';
import { IProject } from '../../../shared/types/Project';
import { AppThunkConfig, RootState } from '../../store';
import LoadableProject from './project.loadable';

export const clearProject = createAsyncThunk(
  'project/clearProject',
  async (_, thunkAPI) => {
    const cleanProject = new LoadableProject();
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

export const getSpacesFromData = (state: RootState) => {
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