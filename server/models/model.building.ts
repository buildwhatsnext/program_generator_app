import * as uuid from 'uuid';
import { Entity, Column, OneToMany, PrimaryColumn, ManyToOne } from "typeorm"
import { IBuilding } from '../../shared/types/Project';
import ProjectModel from './model.project';
import { IUpdateable } from '../../shared/types/ICanUpdate';

@Entity('buildings')
export class BuildingModel implements IBuilding, IUpdateable<IBuilding> {
  @PrimaryColumn({type: 'uuid' })
  id: string;

  @Column({type: 'numeric'})
  areaGross: number;

  @Column({type: 'numeric'})
  areaNet: number;

  @Column({type: 'numeric'})
  floors: number;

  @Column({type: 'numeric'})
  targetFactorCirculation: number;

  @Column({type: 'numeric'})
  targetFactorLoss: number;

  @Column({type: 'numeric'})
  targetAreaPerWorkseat: number;

  @Column({type: 'numeric'})
  targetNumOfWorkseats: number;

  @Column({type: 'numeric'})
  totalProgrammedArea: number;

  @Column({type: 'numeric'})
  totalWorkseatRatio: number;

  @Column({type: 'numeric'})
  totalNumOfWorkseats: number;

  @Column({type: 'numeric'})
  totalNumOfCollabseats: number;

  @Column({type: 'numeric'})
  totalCollaborationRatio: number;

  @ManyToOne(() => ProjectModel, 
    project => project.buildings
  )
  project: ProjectModel

  initialize() {
    this.id = uuid.v4();
    this.updateData();
  }

  updateElement(element: IBuilding) {
    if(this.id !== element.id){
      throw new Error(
        `This is not the same element.
        check IDS: ObjA: ${this.id} ObjB: ${element.id}`
      );
    }

    this.updateData(element);
  }


  updateData(bldg?: IBuilding) {
    this.areaGross = bldg?.areaGross || 0;
    this.areaGross = bldg?.areaGross || 0;
    this.areaNet = bldg?.areaNet || 0;
    this.floors = bldg?.floors || 0;
    this.targetFactorCirculation = bldg?.targetFactorCirculation || 0;
    this.targetFactorLoss = bldg?.targetFactorLoss || 0;
    this.targetAreaPerWorkseat = bldg?.targetAreaPerWorkseat || 0;
    this.targetNumOfWorkseats = bldg?.targetNumOfWorkseats || 0;
    this.totalProgrammedArea = bldg?.totalProgrammedArea || 0;
    this.totalWorkseatRatio = bldg?.totalWorkseatRatio || 0;
    this.totalNumOfWorkseats = bldg?.totalNumOfWorkseats || 0;
    this.totalNumOfCollabseats = bldg?.totalNumOfCollabseats || 0;
    this.totalCollaborationRatio = bldg?.totalCollaborationRatio || 0;
  }

  constructor() {
    this.initialize()
  }
}