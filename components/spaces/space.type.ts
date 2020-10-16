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
  name: string;
  seats: number;
  ratio: string;
  area: number;
  quantity_selected: number;
  seats_total: number;
  area_total: number;
  type: SpaceType;
}

export interface IFloor {
  name: string;
  spaces: ISpace[]
}

export interface IProgram {
  name: string;
  spaces: IUnplacedSpaceCollection;
  floors: IFloor[];
}

export interface IUnplacedSpaceCollection {
  Unknown: ISpace[]
  None: ISpace[]
  Enclosed: ISpace[]
  OpenPlan: ISpace[]
  Meeting: ISpace[]
  Amenity: ISpace[]
  Support: ISpace[]
  Broadcast: ISpace[]
  Lab: ISpace[]
}