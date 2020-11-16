import { createSlice } from "@reduxjs/toolkit";
import { tryConvertToNumber } from "../../../shared/lib/conversion";
import { Building, IBuilding } from "../../../shared/types/Building";
import { RootState } from "../../store";

const building = {...new Building()};

const bldgSlice = createSlice({
  name: 'building',
  initialState: building,
  reducers: {
  }
})

// export const {
// } = bldgSlice.actions;

export default bldgSlice.reducer;

// export const selectBuilding = (state: RootState) => state.building;