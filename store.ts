import { configureStore, Action } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';

import clockReducer from './lib/slices/clockSlice'
import counterReducer from './lib/slices/counterSlice'
import notesReducer from './lib/slices/notesSlice'
import overviewReducer from './features/info/info.slice';
import projectReducer from './features/project/project.slice';
import programReducer from './features/space/space.slice';
import settingsReducer from './features/settings/settings.slice';

const rootReducer = combineReducers({
  counter: counterReducer,
  clock: clockReducer,
  notes: notesReducer,
  overview: overviewReducer,
  project: projectReducer,
  program: programReducer,
  settings: settingsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>