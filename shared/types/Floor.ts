import * as uuid from 'uuid';
import { ISpace } from './ISpace';
import ISpaceStateContainer from './ISpaceStateContainer';
import ISpaceTotalContainer from './ISpaceTotalContainer';
import { IHasId } from './Project';

export interface IFloor extends ISpaceTotalContainer, ISpaceStateContainer, IHasId {
  
}

export class FloorState implements IFloor {
  id: string;
  name: string;
  totalAreaContainer: number;
  totalAreaHold: number;
  totalAreaUnprogrammed: number;
  totalAreaEnclosed: number;
  totalAreaOpen: number;
  totalAreaMeeting: number;
  totalAreaAmenity: number;
  totalAreaSupport: number;
  totalAreaBroadcast: number;
  totalAreaLab: number;
  EnclosedState: string[];
  OpenPlanState: string[];
  MeetingState: string[];
  AmenityState: string[];
  SupportState: string[];
  BroadcastState: string[];
  LabState: string[];

  constructor(name: string) {
    this.initialize(name)
  }

  initialize(name: string) {
    this.id = uuid.v4();
    this.name = name;
    this.totalAreaContainer = 0;
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