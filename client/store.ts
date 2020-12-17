import { configureStore, Action } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';
// import logger from 'redux-logger';
import projectReducer from './features/project/project.slice';
// import buildingReducer from './features/building/building.slice';
import programReducer from './features/space/space.slice';
import settingsReducer from './features/session/session.slice';

import logger from './middleware/middleware.logging';
import spaceCalc from './middleware/middleware.calc';
import spaceLoader from './middleware/middleware.space';
import projHandler from './middleware/middleware.project';


const rootReducer = combineReducers({
  project: projectReducer,
  program: programReducer,
  session: settingsReducer,
  // building: buildingReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
    .concat(
      spaceCalc,
      spaceLoader, 
      projHandler
    ),
  devTools: true,
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
export type AppThunkConfig = {
  dispatch: AppDispatch,
  state: RootState
}