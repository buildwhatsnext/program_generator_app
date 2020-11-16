import { Check, Column, Entity, PrimaryColumn, OneToMany, ManyToOne } from "typeorm";
import { ISpace } from "../../shared/types/ISpace";
import SpaceType from "../../shared/types/SpaceType";
import { IBuildingElement, IFloorElement } from '../../shared/types/IElement';
import { BuildingModel } from "./model.building";
import { FloorModel } from "./model.floor";

@Entity({name: 'spaces'})
export class SpaceModel implements ISpace {
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

  @ManyToOne(() => BuildingModel, 
    bldg => bldg.spaces,
    { 
      onUpdate: 'CASCADE', 
      onDelete: 'CASCADE'
    }
  )
  building: BuildingModel;

  @ManyToOne(() => FloorModel, 
    floor => floor.spaces,
    { 
      onUpdate: 'CASCADE', 
      onDelete: 'CASCADE'
    }
  )
  floor: FloorModel;
}