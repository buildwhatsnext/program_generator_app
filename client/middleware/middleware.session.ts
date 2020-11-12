// import { PayloadAction } from "@reduxjs/toolkit";
// import { MiddlewareAPI, Dispatch, Action, AnyAction } from "redux";
// import { createProject } from "../features/project/project.slice";
// import { RootState } from "../store";

// const sessionHandler = 
//   (api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => 
//   (next: Dispatch) => (action: PayloadAction) => {
//     switch(action.type) {
//       case createProject.fulfilled.type: 
//         // handleProjectCreation(action, api)
//         break;
//       default:
//         break;
//     }

//     return next(action);
// }

// export default sessionHandler;