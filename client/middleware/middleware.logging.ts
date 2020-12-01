// import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { Middleware, MiddlewareAPI, Dispatch, Action, AnyAction } from "redux";
import { RootState } from '../store';

const logger = (api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => (next: Dispatch) => (action: Action) => {
  const state = api.getState();
  console.log(action);
  console.log(state);
  return next(action);
};

export default logger;
