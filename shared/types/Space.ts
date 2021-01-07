import { Guid } from 'guid-typescript';
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
  // floorID: string;
  // buildingID: string;

  public constructor(space?: Partial<ISpace>) {
    this.initialize(space);
  }

  protected initialize(space?: Partial<ISpace>): void {
    if(space)
      this.updateData(space);
  }

  abstract setSpaceType(): void;

  updateData(data: Partial<Space>) {
    this.id = data.id ?? Guid.create().toString();
    this.name = data.name ?? '';
    this.seats = data.seats ?? 0;
    this.ratio = data.ratio ?? '1:1';
    this.area = data.area ?? 0;
    this.quantitySelected = data.quantitySelected ?? 0;
    this.seatTotal = data.seatTotal ?? 0;
    this.areaTotal = data.areaTotal ?? 0;

    if(data.type) {
      this.type = data.type
    } else {
      this.setSpaceType();
    }
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
