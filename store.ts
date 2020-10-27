import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import clockReducer from './lib/slices/clockSlice'
import counterReducer from './lib/slices/counterSlice'
import notesReducer from './lib/slices/notesSlice'
import programReducer from './features/space/space.slice';
import projectReducer from './features/project/project.slice';
import settingsReducer from './features/settings/settings.slice';

const rootReducer = combineReducers({
  counter: counterReducer,
  clock: clockReducer,
  notes: notesReducer,
  program: programReducer,
  project: projectReducer,
  settings: settingsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

export default store;
export type RootState = ReturnType<typeof rootReducer>;