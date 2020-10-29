/* eslint-disable max-classes-per-file */
/* eslint-disable lines-between-class-members */
import { Guid } from 'guid-typescript';

// eslint-disable-next-line no-shadow
export enum SpaceType {
  Unknown = -1,
  None = 0,
  Enclosed,
  OpenPlan,
  Meeting,
  Amenity,
  Support,
  Broadcast,
  Lab
}

export interface ISpace {
  id: string;
  name: string;
  seats: number;
  ratio: string;
  area: number;
  quantitySelected: number;
  seatTotal: number;
  areaTotal: number;
  type: SpaceType;
}

export abstract class Space implements ISpace{
  id: string;
  name: string;
  seats: number;
  ratio: string;
  area: number;
  quantitySelected: number;
  seatTotal: number;
  areaTotal: number;
  type: SpaceType;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.id = Guid.create().toString();
    this.name = '';
    this.seats = 0;
    this.ratio = '1:1';
    this.area = 0;
    this.quantitySelected = 0;
    this.seatTotal = 0;
    this.areaTotal = 0;
    // this.type = SpaceType.Unknown; // set in the method below
    this.setSpaceType();
  }

  abstract setSpaceType(): void;
}

export class EnclosedOfficeSpace extends Space {
  setSpaceType() {
    this.type = SpaceType.Enclosed;
  }
}

export class OpenOfficeSpace extends Space {
  setSpaceType() {
    this.type = SpaceType.OpenPlan;
  }
}

export class MeetingSpace extends Space {
  setSpaceType() {
    this.type = SpaceType.Meeting;
  }
}

export class AmenitySpace extends Space {
  setSpaceType() {
    this.type = SpaceType.Amenity;
  }
}

export class SupportSpace extends Space {
  setSpaceType() {
    this.type = SpaceType.Support;
  }
}

export class BroadcastSpace extends Space {
  setSpaceType() {
    this.type = SpaceType.Broadcast;
  }
}

export class LabSpace extends Space {
  setSpaceType() {
    this.type = SpaceType.Lab;
  }
}

export class SpaceFactory {
  static create<T extends Space>(type: new () => T): T {
    // eslint-disable-next-line new-cap
    const obj = new type();

    return obj;
  }
}