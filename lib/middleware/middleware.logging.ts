// import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { Middleware, MiddlewareAPI, Dispatch, Action } from "redux";
import { RootState } from '../../store';

// export interface ExtendedMiddleware<StateType> extends Middleware {
//   <S extends StateType>(api: MiddlewareAPI<S>): (next: Dispatch<S>) => Dispatch<S>;
// }
 
// export const loggerMiddleware: ExtendedMiddleware<RootState> = <S extends RootState>(api: MiddlewareAPI<S>) =>
//     (next: Dispatch<S>) =>
//         <A extends Action>(action: A): A => {
//             console.log("Before");
//             const result = next(action);
//             console.log("After"); // Can use: api.getState()
//             return result;
//         };

// export const logger: Middleware = (store: RootState) => (next: Dispatch) => (action: Action) => {
//   console.log('dispatching', action)
//   const result = next(action)
//   console.log('next state', store)
//   return result
// }