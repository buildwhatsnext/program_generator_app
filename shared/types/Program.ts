import ISpaceTotalContainer from './ISpaceTotalContainer';
import ISpaceStateContainer from './ISpaceStateContainer';

export interface IProgramState extends ISpaceStateContainer, ISpaceTotalContainer {

}

export class ProgramState implements IProgramState {
  name: string;
  EnclosedState: string[]
  OpenPlanState: string[]
  MeetingState: string[]
  AmenityState: string[]
  SupportState: string[]
  BroadcastState: string[]
  LabState: string[]
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

  constructor() {
    this.initialize();
  }

  private initialize() {
    this.name = '';
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

export type ProgramStateType = IProgramState;