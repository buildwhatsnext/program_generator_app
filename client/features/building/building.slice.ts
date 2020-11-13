import { createSlice } from "@reduxjs/toolkit";
import { tryConvertToNumber } from "../../../shared/lib/conversion";
import { Building, IBuilding } from "../../../shared/types/Building";
import { RootState } from "../../store";

const building = {...new Building()};

const bldgSlice = createSlice({
  name: 'building',
  initialState: building,
  reducers: {
    
    setRsf: (state, action) => {
      state.areaGross = Number(action.payload);
    },
    setNetArea: (state, action) => {
      console.log('Setting net area')
      const input = tryConvertToNumber(action.payload);
      state.areaNet = input;
    },
    setFloorCount: (state, action) => {
      state.floors = Number(action.payload);
    },
    setCirculation: (state, action) => {
      const input = Number(action.payload);
      state.targetFactorCirculation = input;
    },
    setPlanning: (state, action) => {
      const input = Number(action.payload);
      state.targetFactorLoss = input;
    },
    setWorkseatArea: (state, action) => {
      const input = Number(action.payload);
      state.targetAreaPerWorkseat = input;
    },
    setWorkseatTarget: (state, action) => {
      const input = Number(action.payload);
      state.targetNumOfWorkseats = input;
    },
    setTotalProgrammedArea: (state, action) => {
      const input = Number(action.payload);
      state.totalProgrammedArea = input;
    },
    setWorkseatRatio: (state, action) => {
      const input = Number(action.payload);
      state.totalWorkseatRatio = action.payload;
    },
    setTotalNumberOfWorkseats: (state, action) => {
      const input = Number(action.payload);
      state.totalNumOfWorkseats = input;
    },
    setCollaborationRatio: (state, action) => {
      const input = Number(action.payload);
      state.totalCollaborationRatio = action.payload;
    },
  }
})

export const {
  setRsf,
  setNetArea,
  setFloorCount,
  setCirculation,
  setPlanning,
  setWorkseatArea,
  setWorkseatTarget,
  setTotalProgrammedArea,
  setWorkseatRatio,
  setTotalNumberOfWorkseats,
  setCollaborationRatio
} = bldgSlice.actions;

export default bldgSlice.reducer;

export const selectBuilding = (state: RootState) => state.building;