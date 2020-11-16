import { ManyToOne, OneToMany } from "typeorm";
import { IFloor } from "../../shared/types/Floor";
import { ISpace } from "../../shared/types/ISpace";
import ISpaceContainer from "../../shared/types/ISpaceContainer";
import ISpaceTotalContainer from "../../shared/types/ISpaceTotalContainer";
import {IBuildingElement} from '../../shared/types/IElement';
import { EnclosedOfficeSpace, OpenOfficeSpace, MeetingSpace, AmenitySpace, SupportSpace, BroadcastSpace, LabSpace } from "../../shared/types/Space";
import { BuildingModel } from "./model.building";
import { SpaceModel } from "./model.space";

// export interface IFloorModel extends ISpaceTotalContainer, ISpaceContainer, IBuildingElement {
export interface IFloorModel extends ISpaceTotalContainer, ISpaceContainer {
  
}

export class FloorModel implements IFloorModel {
  
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
  Enclosed: EnclosedOfficeSpace[];
  OpenPlan: OpenOfficeSpace[];
  Meeting: MeetingSpace[];
  Amenity: AmenitySpace[];
  Support: SupportSpace[];
  Broadcast: BroadcastSpace[];
  Lab: LabSpace[];
  
  // @ManyToOne(() => BuildingModel, 
  //   bldg => bldg.floorsData,
  //   { 
  //     onUpdate: 'CASCADE', 
  //     onDelete: 'CASCADE'
  //   }
  // )
  // building: BuildingModel

  // @OneToMany(() => SpaceModel, 
  //   space => space.floor
  // )
  // spaces: SpaceModel;
  
}