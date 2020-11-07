import SpaceType from "./SpaceType";

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