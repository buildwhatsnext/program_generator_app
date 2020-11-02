/* eslint-disable no-array-constructor */
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

export interface IUnplacedSpaceCollection {
  // Unknown: ISpace[]
  // None: ISpace[]
  Enclosed: EnclosedOfficeSpace[]
  OpenPlan: OpenOfficeSpace[]
  Meeting: MeetingSpace[]
  Amenity: AmenitySpace[]
  Support: SupportSpace[]
  Broadcast: BroadcastSpace[]
  Lab: LabSpace[]
}

export class UnplacedSpaceCollection implements IUnplacedSpaceCollection {
  // Unknown: ISpace[];
  // None: ISpace[];
  Enclosed: EnclosedOfficeSpace[];
  OpenPlan: OpenOfficeSpace[];
  Meeting: MeetingSpace[];
  Amenity: AmenitySpace[];
  Support: SupportSpace[];
  Broadcast: BroadcastSpace[];
  Lab: LabSpace[];

  constructor() {
    this.initialize();
  }

  private initialize() {
    // this.Unknown = new Array<ISpace>();
    // this.None = new Array<ISpace>();
    this.Enclosed = new Array<EnclosedOfficeSpace>();
    this.OpenPlan = new Array<OpenOfficeSpace>();
    this.Meeting = new Array<MeetingSpace>();
    this.Amenity = new Array<AmenitySpace>();
    this.Support = new Array<SupportSpace>();
    this.Broadcast = new Array<BroadcastSpace>();
    this.Lab = new Array<LabSpace>();
  }
  
}