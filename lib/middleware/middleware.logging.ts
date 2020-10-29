// import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { Middleware, MiddlewareAPI, Dispatch, Action } from "redux";
import { RootState } from '../../store';

const logger = (api: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
  console.log(action);
  console.log(api.getState());
  return next(action);
};

export default logger;
