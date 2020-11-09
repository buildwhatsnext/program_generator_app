import { ISpace } from "../../shared/types/ISpace";
import SpaceType from "../../shared/types/SpaceType";

export class SpaceModel implements ISpace{
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