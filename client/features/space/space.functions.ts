import { ActionCreatorWithOptionalPayload } from "@reduxjs/toolkit";
import { processSpatialData } from "../../../shared/lib/conversion";
import { Space } from "../../../shared/types/Space";
import SpaceType from "../../../shared/types/SpaceType";
import { calculateTotalSpatialArea } from "../../middleware/middleware.space";
import { AppDispatch } from "../../store";

export function hydrateSpaceState<T extends Partial<Space>>(dehydratedState: string[]) {
  if(!dehydratedState)
    return null;

  // console.log('Hydrating space data...')
  const enclosed: T[] = dehydratedState?.map(space => {
    const hydrated: T = JSON.parse(space);
    return hydrated;
  });

  // console.log('Hydrated!')

  return enclosed;
}

export function dehydrateSpaceData<T extends Partial<Space>>(elements: T[]) {
  console.log('Serializing space data...')
  const serialized = elements?.map(space => {
    const reduced = JSON.stringify(space);
    return reduced;
  })
  console.log('Serialized!')

  return serialized;
}

export const filterSpaceByType = (data: Partial<Space>[] , type: SpaceType) => {
  return data.filter(space => space.type === type);
}

export const filterAllSpaceDataByType = (data: Partial<Space>[]): SpaceCollection => {
  const dataAmenity = filterSpaceByType(data, SpaceType.Amenity);
  const dataBroadcast = filterSpaceByType(data, SpaceType.Broadcast);
  const dataEnclosed = filterSpaceByType(data, SpaceType.Enclosed);
  const dataLab = filterSpaceByType(data, SpaceType.Lab);
  const dataMeeting = filterSpaceByType(data, SpaceType.Meeting);
  const dataOpenPlan = filterSpaceByType(data, SpaceType.OpenPlan);
  const dataSupport = filterSpaceByType(data, SpaceType.Support);

  return {
    amenity: dataAmenity,
    broadcast: dataBroadcast,
    enclosed: dataEnclosed,
    lab: dataLab,
    meeting: dataMeeting,
    open: dataOpenPlan,
    support: dataSupport
  }
}

export function handleUpdate<T extends Space>(
  tableData: T[], 
  storeHandler: ActionCreatorWithOptionalPayload<string[], string>,
  areaHandler: ActionCreatorWithOptionalPayload<any, string>,
  dispatch: AppDispatch
  ) {
  console.log('Saving to the app storage');
  const converted = processSpatialData(tableData);
    const serialized = dehydrateSpaceData(converted);
  dispatch(storeHandler(serialized));
  dispatch(calculateTotalSpatialArea(serialized, areaHandler))
}

export type SpaceCollection = {
  amenity: Partial<Space>[];
  broadcast: Partial<Space>[];
  enclosed: Partial<Space>[];
  lab: Partial<Space>[];
  meeting: Partial<Space>[];
  open: Partial<Space>[];
  support: Partial<Space>[];
}