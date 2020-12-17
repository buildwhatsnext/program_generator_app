import { ActionCreatorWithOptionalPayload, PayloadAction } from "@reduxjs/toolkit";
import { MiddlewareAPI, Dispatch, Action, AnyAction } from "redux";
import { AppThunk, RootState } from '../store';
import { setAmenityData, setAmenityTotalArea, setBroadcastData, setBroadcastTotalArea, setEnclosedData, setEnclosedTotalArea, setLabData, setLabTotalArea, setMeetingData, setMeetingTotalArea, setOpenOfficeData, setOpenOfficeTotalArea, setSupportData, setSupportTotalArea } from "../features/space/space.slice";
import SpaceModel from "../../server/models/model.space";
import { sumTotals } from "../../shared/lib/calculators";

const handleSpaceCalculations = () => {
  console.log('Calculating...');
  console.log('Calculations Done!');
}

const spaceCalculator = (api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => (next: Dispatch) => (action: Action) => {
  switch(action.type) {
    case setAmenityData.type:
    case setBroadcastData.type:
    case setEnclosedData.type:
    case setLabData.type:
    case setMeetingData.type:
    case setOpenOfficeData.type:
    case setSupportData.type:
      handleSpaceCalculations();
      break;
    default:
      break;
  }

  return next(action);
};

export default spaceCalculator;
