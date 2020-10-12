import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import clockReducer from './lib/slices/clockSlice'
import counterReducer from './lib/slices/counterSlice'
import notesReducer from './lib/slices/notesSlice'
import projectReducer from './features/project/project.slice';

const rootReducer = combineReducers({
  counter: counterReducer,
  clock: clockReducer,
  notes: notesReducer,
  project: projectReducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

export default store;
export type RootState = ReturnType<typeof rootReducer>;