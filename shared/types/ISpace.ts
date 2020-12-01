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