import { IHasId } from "./Project";
import SpaceType from "./SpaceType";

export interface ISpace extends IHasId {
  name: string;
  seats: number;
  ratio: string;
  area: number;
  quantitySelected: number;
  seatTotal: number;
  areaTotal: number;
  type: SpaceType;
}