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