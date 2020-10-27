import { Guid } from 'guid-typescript';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import data from './project.data';
import { IProject } from './project.type';

const projectSlice = createSlice({
  name: 'project',
  initialState: data,
  reducers: {
    createNewProject: {
      reducer(state, action: PayloadAction<IProject>) {
        // console.log(state);
        state.dateModified = Date.now().toString();
      },
      prepare(): PayloadAction<IProject> {
        const now = new Date();
        return {
          type: 'project/createNewProject',
          payload: {
            id: Guid.create().toString(),
            dateCreated: now.toTimeString(),
            dateModified: now.toTimeString(),
          },
        };
      },
    },
    openProject: (state, action: PayloadAction<IProject>) => {
      console.log(state);
      console.log(action);
    },
  },
});

export const { createNewProject, openProject } = projectSlice.actions;

export default projectSlice.reducer;

export const selectProject = (state: RootState) => state.project;
