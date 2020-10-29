// import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { Middleware, MiddlewareAPI, Dispatch, Action } from "redux";
import { RootState } from '../../store';

// const logger = (api: Middleware<RootState>) => {
//   return (next: Dispatch) => (action: Action) => {

//     console.log(action);

//     return next(action);
//   };
// };

const logger = (api) => (next) => (action) => {
  console.log(action);
  return next(action);
};

export default logger;
