import { IFloor } from "../../shared/types/Floor";
import { ISpace } from "../../shared/types/ISpace";

export class FloorModel implements IFloor{
  spaces: ISpace[];
  name: string;
  totalAreaContainer: number;
  totalAreaHold: number;
  totalAreaUnprogrammed: number;
  totalAreaEnclosed: number;
  totalAreaOpen: number;
  totalAreaMeeting: number;
  totalAreaAmenity: number;
  totalAreaSupport: number;
  totalAreaBroadcast: number;
  totalAreaLab: number;

}