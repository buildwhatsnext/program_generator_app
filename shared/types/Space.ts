import { Guid } from 'guid-typescript';
import { EntityTarget } from 'typeorm';
import { ISpace } from './ISpace';
import SpaceType from './SpaceType';

export abstract class Space implements ISpace {
  id: string;
  name: string;
  seats: number;
  ratio: string;
  area: number;
  quantitySelected: number;
  seatTotal: number;
  areaTotal: number;
  type: SpaceType;
  floorID: string;
  buildingID: string;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.id = Guid.create().toString();
    this.name = '';
    this.seats = 0;
    this.ratio = '1:1';
    this.area = 0;
    this.quantitySelected = 1;
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
