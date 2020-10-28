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
  ISpace,
  Space
} from './Space';

export interface IProgram {
  name: string;
  // spaces: IUnplacedSpaceCollection;
  // floors: IFloor[];
  Enclosed: EnclosedOfficeSpace[]
  OpenPlan: OpenOfficeSpace[]
  Meeting: MeetingSpace[]
  Amenity: AmenitySpace[]
  Support: SupportSpace[]
  Broadcast: BroadcastSpace[]
  Lab: LabSpace[]
  totalAreaBuilding: number;
  totalAreaProgrammed: number;
  totalAreaUnplanned: number;
  totalAreaCirculation: number;
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
  // spaces: IUnplacedSpaceCollection;
  // floors: IFloor[];
  Enclosed: EnclosedOfficeSpace[]
  OpenPlan: OpenOfficeSpace[]
  Meeting: MeetingSpace[]
  Amenity: AmenitySpace[]
  Support: SupportSpace[]
  Broadcast: BroadcastSpace[]
  Lab: LabSpace[]
  totalAreaBuilding: number;
  totalAreaProgrammed: number;
  totalAreaUnplanned: number;
  totalAreaCirculation: number;
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
    // this.spaces = new UnplacedSpaceCollection();
    // this.floors = new Array<IFloor>();
    this.totalAreaBuilding = 0;
    this.totalAreaProgrammed = 0;
    this.totalAreaUnplanned = 0;
    this.totalAreaCirculation = 0;
    this.totalAreaEnclosed = 0;
    this.totalAreaOpen = 0;
    this.totalAreaMeeting = 0;
    this.totalAreaAmenity = 0;
    this.totalAreaSupport = 0;
    this.totalAreaBroadcast = 0;
    this.totalAreaLab = 0;
    this.Enclosed = new Array<EnclosedOfficeSpace>();
    this.OpenPlan = new Array<OpenOfficeSpace>();
    this.Meeting = new Array<MeetingSpace>();
    this.Amenity = new Array<AmenitySpace>();
    this.Support = new Array<SupportSpace>();
    this.Broadcast = new Array<BroadcastSpace>();
    this.Lab = new Array<LabSpace>();
  }

}