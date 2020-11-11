import { configureStore, Action } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';
// import logger from 'redux-logger';
import overviewReducer from './features/project/info.slice';
import projectReducer from './features/project/project.slice';
import programReducer from './features/space/space.slice';
import settingsReducer from './features/session/session.slice';

import logger from './middleware/middleware.logging';
import calc from './middleware/middleware.space';
import projHandler from './middleware/middleware.project';


const rootReducer = combineReducers({
  overview: overviewReducer,
  project: projectReducer,
  program: programReducer,
  session: settingsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(calc, projHandler),
    // => getDefaultMiddleware().concat(logger),
  devTools: true,
})

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>