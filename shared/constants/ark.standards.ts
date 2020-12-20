import { ActionCreatorWithOptionalPayload } from '@reduxjs/toolkit';
import { ISpace } from '../types/ISpace';
import { AmenitySpace, BroadcastSpace, EnclosedOfficeSpace, LabSpace, MeetingSpace, OpenOfficeSpace, Space, SupportSpace } from '../types/Space';
import PROGRAMS from './ark.programs';
import { ROUTES } from './routes';
import * as spaceSlice from '../../client/features/space/space.slice';


export interface SpaceDisplayStandard {
  name: string;
  color: string;
  border?: string;
  hoverBackgroundColor?: string;
  route: string;
  stateName?: string;
  type?: new () => Space;
  sectionTitle?: string;
  storeHandler?: ActionCreatorWithOptionalPayload<string[], string>;
  areaHandler?: ActionCreatorWithOptionalPayload<any, string>;
}

export const SPACE_STATE_NAMES = {
  AMENITY: 'AmenityState',
  BROADCAST: 'BroadcastState',
  ENCLOSED: 'EnclosedState',
  LAB: 'LabState',
  MEETING: 'MeetingState',
  OPEN_OFFICE: 'OpenPlanState',
  SUPPORT: 'SupportState'
}

export type SpaceDisplayCollection = Record<string, SpaceDisplayStandard>;

export const SPACE_STANDARDS: SpaceDisplayCollection = {
  UNPLANNED: {
    name: PROGRAMS.UNPLANNED,
    color: '#ffffff',
    border: '#06038D',
    route: ROUTES.INFO.CONSTRAINTS
  },
  CIRCULATION: {
    name: PROGRAMS.CIRCULATION,
    color: '#c4c4c4',
    route: ROUTES.INFO.TARGET
  },
  ENCLOSED_OFFICE: {
    name: PROGRAMS.ENCLOSED_OFFICE,
    color: '#06038D',
    hoverBackgroundColor: '#030146',
    route: ROUTES.SPACE.ENCLOSED,
    stateName: SPACE_STATE_NAMES.ENCLOSED,
    type: EnclosedOfficeSpace,
    sectionTitle: 'Enclosed Offices',
    storeHandler: spaceSlice.setEnclosedData,
    areaHandler: spaceSlice.setEnclosedTotalArea
  },
  OPEN_OFFICE_AREA: {
    name: PROGRAMS.OPEN_OFFICE_AREA,
    color: '#0097cc',
    route: ROUTES.SPACE.OPEN_PLAN,
    stateName: SPACE_STATE_NAMES.OPEN_OFFICE,
    type: OpenOfficeSpace,
    sectionTitle: 'Open Office Area',
    storeHandler: spaceSlice.setOpenOfficeData,
    areaHandler: spaceSlice.setOpenOfficeTotalArea
  },
  MEETING: {
    name: PROGRAMS.MEETING,
    color: '#ffcc00',
    route: ROUTES.SPACE.MEETING,
    stateName: SPACE_STATE_NAMES.MEETING,
    type: MeetingSpace,
    sectionTitle: 'Meeting Spaces',
    storeHandler: spaceSlice.setMeetingData,
    areaHandler: spaceSlice.setMeetingTotalArea
  },
  AMENITY: {
    name: PROGRAMS.AMENITY,
    color: '#F08A02',
    route: ROUTES.SPACE.AMENITY,
    stateName: SPACE_STATE_NAMES.AMENITY,
    type: AmenitySpace,
    sectionTitle: 'Amenity Spaces',
    storeHandler: spaceSlice.setAmenityData,
    areaHandler: spaceSlice.setAmenityTotalArea
  },
  SUPPORT: {
    name: PROGRAMS.SUPPORT,
    color: '#92d050',
    hoverBackgroundColor: '#577c30',
    route: ROUTES.SPACE.SUPPORT,
    stateName: SPACE_STATE_NAMES.SUPPORT,
    type: SupportSpace,
    sectionTitle: 'Support Spaces',
    storeHandler: spaceSlice.setSupportData,
    areaHandler: spaceSlice.setSupportTotalArea,
  },
  BROADCAST: {
    name: PROGRAMS.BROADCAST,
    color: '#FF5CCA',
    hoverBackgroundColor: '#993779',
    route: ROUTES.SPACE.BROADCAST,
    stateName: SPACE_STATE_NAMES.BROADCAST,
    type: BroadcastSpace,
    sectionTitle: 'Broadcast Spaces',
    storeHandler: spaceSlice.setBroadcastData,
    areaHandler: spaceSlice.setBroadcastTotalArea
  },
  LAB: {
    name: PROGRAMS.LAB,
    color: '#ff0000',
    route: ROUTES.SPACE.LAB,
    stateName: SPACE_STATE_NAMES.LAB,
    type: LabSpace,
    sectionTitle: 'Lab Spaces',
    storeHandler: spaceSlice.setLabData,
    areaHandler: spaceSlice.setLabTotalArea
  },
}
