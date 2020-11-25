import { Check, Column, Entity, PrimaryColumn, OneToMany, ManyToOne } from "typeorm";
import { ISpace } from "../../shared/types/ISpace";
import SpaceType from "../../shared/types/SpaceType";
import ProjectModel from "./model.project";
import { Space } from "../../shared/types/Space";
import { Guid } from "guid-typescript";

@Entity({name: 'spaces'})
export default class SpaceModel implements ISpace {
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

  setSpaceType(): void {
    console.log('Created a space model');
  }

  protected initialize(): void {
    this.id = Guid.create().toString();
    this.name = '';
    this.seats = 0;
    this.ratio = '1:1';
    this.area = 0;
    this.quantitySelected = 1;
    this.seatTotal = 0;
    this.areaTotal = 0;
    // this.type = SpaceType.Unknown; // set in the method below
    this.setSpaceType();
  }

  updateData(data: Partial<Space>) {
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
    // this.floorID = data.floorID || null;
    // this.buildingID = data.buildingID || null;
  }

  public constructor() {
    this.initialize();
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