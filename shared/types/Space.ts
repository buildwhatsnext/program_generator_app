import { Guid } from 'guid-typescript';
import { EntityTarget } from 'typeorm';
import { ISpace } from './ISpace';
import SpaceType from './SpaceType';
import { ICanUpdate, IUpdateable } from './ICanUpdate';

export abstract class Space implements ISpace, ICanUpdate {
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
  updateData(data: Space) {
    if(this.id !== data.id){
      throw new Error(
        `This is not the same element.
        check IDS: ObjA: ${this.id} ObjB: ${data.id}`
      );
    }

    this.name = data.name || null;
    this.seats = data.seats || null;
    this.ratio = data.ratio || null;
    this.area = data.area || null;
    this.quantitySelected = data.quantitySelected || null;
    this.seatTotal = data.seatTotal || null;
    this.areaTotal = data.areaTotal || null;
    this.type = data.type || null;
    this.floorID = data.floorID || null;
    this.buildingID = data.buildingID || null;
  }
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
