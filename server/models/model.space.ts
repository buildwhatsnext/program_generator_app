import { Check, Column, Entity, PrimaryColumn, OneToMany, ManyToOne } from "typeorm";
import { ISpace } from "../../shared/types/ISpace";
import SpaceType from "../../shared/types/SpaceType";
import { IBuildingElement, IFloorElement } from '../../shared/types/IElement';
import { BuildingModel } from "./model.building";
import { FloorModel } from "./model.floor";
import ProjectModel from "./model.project";
import { Space } from "../../shared/types/Space";

@Entity({name: 'spaces'})
export class SpaceModel implements ISpace {
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

  updateData(data: Space) {
    if(this.id !== data.id){
      throw new Error(
        `This is not the same element.
        check IDS: ObjA: ${this.id} ObjB: ${data.id}`
      );
    }

    this.name = data.name || null;
    this.seats = data.seats || null;
    this.ratio = data.ratio || null;
    this.area = data.area || null;
    this.quantitySelected = data.quantitySelected || null;
    this.seatTotal = data.seatTotal || null;
    this.areaTotal = data.areaTotal || null;
    this.type = data.type || null;
  }
}

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
// }