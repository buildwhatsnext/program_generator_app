import { ISpace } from './ISpace';

export interface IFloor {
  name: string;
  spaces: ISpace[]
}

export class Floor implements IFloor {
  name: string;
  spaces: ISpace[];

  constructor(name: string) {
    this.initialize(name)
  }

  initialize(name: string) {
    this.name = name;
    this.spaces = new Array<ISpace>();
  }
}