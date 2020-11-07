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

export interface IProgram {
  name: string;
  Enclosed: EnclosedOfficeSpace[]
  OpenPlan: OpenOfficeSpace[]
  Meeting: MeetingSpace[]
  Amenity: AmenitySpace[]
  Support: SupportSpace[]
  Broadcast: BroadcastSpace[]
  Lab: LabSpace[]
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
}

export class Program implements IProgram{
  name: string;
  Enclosed: EnclosedOfficeSpace[]
  OpenPlan: OpenOfficeSpace[]
  Meeting: MeetingSpace[]
  Amenity: AmenitySpace[]
  Support: SupportSpace[]
  Broadcast: BroadcastSpace[]
  Lab: LabSpace[]
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
    this.Enclosed = new Array<EnclosedOfficeSpace>();
    this.OpenPlan = new Array<OpenOfficeSpace>();
    this.Meeting = new Array<MeetingSpace>();
    this.Amenity = new Array<AmenitySpace>();
    this.Support = new Array<SupportSpace>();
    this.Broadcast = new Array<BroadcastSpace>();
    this.Lab = new Array<LabSpace>();
  }
}

export type ProgramState = IProgram;