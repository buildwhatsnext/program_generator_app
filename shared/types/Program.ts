import { IUnplacedSpaceCollection, UnplacedSpaceCollection } from './Unplaced';
import { IFloor, Floor } from './Floor';
import {
  EnclosedOfficeSpace,
  OpenOfficeSpace,
  MeetingSpace,
  AmenitySpace,
  SupportSpace,
  BroadcastSpace,
  LabSpace,
} from './Space';

export interface ISpaceTotalContainer {
  name: string;
  totalAreaBuilding: number;
  totalAreaHold: number;
  totalAreaUnprogrammed: number;
  totalAreaEnclosed: number;
  totalAreaOpen: number;
  totalAreaMeeting: number;
  totalAreaAmenity: number;
  totalAreaSupport: number;
  totalAreaBroadcast: number;
  totalAreaLab: number;
}

export interface IProgramSpaceContainer extends ISpaceTotalContainer{
  Enclosed: EnclosedOfficeSpace[]
  OpenPlan: OpenOfficeSpace[]
  Meeting: MeetingSpace[]
  Amenity: AmenitySpace[]
  Support: SupportSpace[]
  Broadcast: BroadcastSpace[]
  Lab: LabSpace[]
}

export interface IProgramStateContainer extends ISpaceTotalContainer {
  EnclosedState: string[]
  OpenPlanState: string[]
  MeetingState: string[]
  AmenityState: string[]
  SupportState: string[]
  BroadcastState: string[]
  LabState: string[]
}

export class ProgramState implements IProgramStateContainer{
  name: string;
  EnclosedState: string[]
  OpenPlanState: string[]
  MeetingState: string[]
  AmenityState: string[]
  SupportState: string[]
  BroadcastState: string[]
  LabState: string[]
  totalAreaBuilding: number;
  totalAreaHold: number;
  totalAreaUnprogrammed: number;
  totalAreaEnclosed: number;
  totalAreaOpen: number;
  totalAreaMeeting: number;
  totalAreaAmenity: number;
  totalAreaSupport: number;
  totalAreaBroadcast: number;
  totalAreaLab: number;

  constructor() {
    this.initialize();
  }

  private initialize() {
    this.name = '';
    this.totalAreaBuilding = 0;
    this.totalAreaHold = 0;
    this.totalAreaUnprogrammed = 0;
    this.totalAreaEnclosed = 0;
    this.totalAreaOpen = 0;
    this.totalAreaMeeting = 0;
    this.totalAreaAmenity = 0;
    this.totalAreaSupport = 0;
    this.totalAreaBroadcast = 0;
    this.totalAreaLab = 0;
    this.EnclosedState = []
    this.OpenPlanState = []
    this.MeetingState = []
    this.AmenityState = []
    this.SupportState = []
    this.BroadcastState = []
    this.LabState = []
  }
}

export type ProgramStateType = IProgramStateContainer;