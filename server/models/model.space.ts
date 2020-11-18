import { Check, Column, Entity, PrimaryColumn, OneToMany, ManyToOne } from "typeorm";
import { ISpace } from "../../shared/types/ISpace";
import SpaceType from "../../shared/types/SpaceType";
import { IBuildingElement, IFloorElement } from '../../shared/types/IElement';
import { BuildingModel } from "./model.building";
import { FloorModel } from "./model.floor";
import ProjectModel from "./model.project";
import { IDbObj } from "../repository/repo.abstract";
import { Space } from "../../shared/types/Space";

@Entity({name: 'spaces'})
export class SpaceModel implements ISpace, IDbObj {
  

  @PrimaryColumn({type: 'uuid'})
  id: string;

  @Column({ type: 'varchar', nullable: true })
  name: string;

  @Column({ type: 'numeric', nullable: true })
  seats: number;

  @Column({ type: 'varchar', nullable: true })
  ratio: string;

  @Column({ type: 'numeric', nullable: true })
  area: number;

  @Column({ type: 'numeric', nullable: true })
  quantitySelected: number;

  @Column({ type: 'numeric', nullable: true })
  seatTotal: number;

  @Column({ type: 'numeric', nullable: true })
  areaTotal: number;

  @Column({type: 'simple-enum', enum: SpaceType})
  type: SpaceType;

  @ManyToOne(() => ProjectModel, 
    project => project.spaces,
    { 
      onUpdate: 'CASCADE', 
      onDelete: 'CASCADE'
    }
  )
  project: ProjectModel;

  // @ManyToOne(() => BuildingModel, 
  //   bldg => bldg.spaces,
  //   { 
  //     onUpdate: 'CASCADE', 
  //     onDelete: 'CASCADE'
  //   }
  // )
  // building: BuildingModel;

  // @ManyToOne(() => FloorModel, 
  //   floor => floor.spaces,
  //   { 
  //     onUpdate: 'CASCADE', 
  //     onDelete: 'CASCADE'
  //   }
  // )
  // floor: FloorModel;
}