import { Check, Column, Entity, PrimaryColumn } from "typeorm";
import { ISpace } from "../../shared/types/ISpace";
import SpaceType from "../../shared/types/SpaceType";
import { IBuildingElement, IFloorElement } from '../../shared/types/IElement';

@Entity({name: 'Projects'})
export class SpaceModel implements ISpace, IBuildingElement, IFloorElement {
  @PrimaryColumn({type: 'uuid'})
  id: string;

  @Column({type: 'varchar', default: ''})
  name: string;

  @Column({type: 'numeric', default: 0})
  seats: number;

  @Column({type: 'varchar', default: ''})
  ratio: string;

  @Column({type: 'numeric', default: 0})
  area: number;

  @Column({type: 'numeric', default: 0})
  quantitySelected: number;

  @Column({type: 'numeric', default: 0})
  seatTotal: number;

  @Column({type: 'numeric', default: 0})
  areaTotal: number;

  @Column({type: 'simple-enum', enum: SpaceType})
  type: SpaceType;

  floorID: string;
  buildingID: string;
}