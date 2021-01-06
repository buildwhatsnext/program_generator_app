import { IUpdateable } from "./ICanUpdate";
import SpaceType from "./SpaceType";

export interface ISpace extends IUpdateable {
  name: string;
  seats: number;
  ratio: string;
  area: number;
  quantitySelected: number;
  seatTotal: number;
  areaTotal: number;
  type: SpaceType;
}

export interface ISpaceTransitObject extends IUpdateable {
  name: string;
  seats: string;
  ratio: string;
  area: string;
  quantitySelected: string;
  seatTotal: number;
  areaTotal: number;
  type: SpaceType;
}