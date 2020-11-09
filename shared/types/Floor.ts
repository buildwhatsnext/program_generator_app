import { ISpace } from './ISpace';
import { ISpaceTotalContainer } from './Program';

export interface IFloor extends ISpaceTotalContainer {
  spaces: ISpace[]
}

export class Floor implements IFloor {
  name: string;
  spaces: ISpace[];
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

  constructor(name: string) {
    this.initialize(name)
  }

  initialize(name: string) {
    this.name = name;
    this.spaces = new Array<ISpace>();
  }
}