import * as uuid from 'uuid';
import 'reflect-metadata';
import { Entity, Column, OneToMany, PrimaryColumn } from "typeorm"
import { IProject } from '../../shared/types/Project';
import { BuildingModel } from './model.building';
import { IUpdateable } from '../../shared/types/ICanUpdate';
import { SpaceModel } from './model.space';

@Entity('projects')
export default class ProjectModel implements IProject, IUpdateable<IProject> {
  @PrimaryColumn({type: 'uuid' })
  id: string;

  @Column({ type: 'varchar', nullable: true })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  client: string;

  @Column({ type: 'varchar', nullable: true })
  tenancy: string;

  @Column({ type: 'varchar', nullable: true })
  units: string;

  @Column({type: "boolean", nullable: true})
  hasBroadcast: boolean;

  @Column({type: "boolean", nullable: true })
  hasLab: boolean;

  @Column({ type: 'varchar', nullable: true })
  createdBy: string;

  @Column({ type: 'varchar', nullable: true })
  modifiedBy: string;

  @Column({type: 'varchar', default: Date.now().toString()})
  dateCreated: string;

  @Column({type: 'varchar', default: Date.now().toString()})
  dateModified: string;

  @Column({ type: 'numeric', nullable: true })
  areaGross: number;

  @Column({ type: 'numeric', nullable: true })
  areaNet: number;

  @Column({ type: 'numeric', nullable: true })
  floors: number;

  @Column({ type: 'numeric', nullable: true })
  targetFactorCirculation: number;

  @Column({ type: 'numeric', nullable: true })
  targetFactorLoss: number;

  @Column({ type: 'numeric', nullable: true })
  targetAreaPerWorkseat: number;

  @Column({ type: 'numeric', nullable: true })
  targetNumOfWorkseats: number;

  @Column({ type: 'numeric', nullable: true })
  totalProgrammedArea: number;

  @Column({ type: 'numeric', nullable: true })
  totalWorkseatRatio: number;

  @Column({ type: 'numeric', nullable: true })
  totalNumOfWorkseats: number;

  @Column({ type: 'numeric', nullable: true })
  totalNumOfCollabseats: number;

  @Column({ type: 'numeric', nullable: true })
  totalCollaborationRatio: number;

  @OneToMany(() => SpaceModel, 
    space => space.project
  )
  spaces: SpaceModel[];

  // @OneToMany(() => BuildingModel, 
  //   bldg => bldg.project
  // )
  // buildings: BuildingModel[];

  initialize() {
    this.id = uuid.v4();
    this.name = 'Untitled Project';
    const now = Date.now().toString();
    this.dateCreated = now
    this.dateModified = now;

    this.updateData()
  }

  updateProject(project: IProject) {
    if(this.id !== project.id){
      throw new Error(
        `This is not the same element.
        check IDS: ObjA: ${this.id} ObjB: ${project.id}`
      );
    }

    this.updateData(project);
  }

  updateData(project?: IProject) {
    
    this.name = project?.name || '';
    this.tenancy = project?.tenancy || '';
    this.hasBroadcast = project?.hasBroadcast || null;
    this.hasLab = project?.hasLab || null;
    this.client = project?.client || '';
    this.units = project?.units || '';
    this.modifiedBy = project?.modifiedBy || '';
    this.areaGross = project?.areaGross || 0;
    this.areaNet = project?.areaNet || 0;
    this.floors = project?.floors || 0;
    this.targetFactorCirculation = project?.targetFactorCirculation || 0;
    this.targetFactorLoss = project?.targetFactorLoss || 0;
    this.targetAreaPerWorkseat = project?.targetAreaPerWorkseat || 0;
    this.targetNumOfWorkseats = project?.targetNumOfWorkseats || 0;
    this.totalProgrammedArea = project?.totalProgrammedArea || 0;
    this.totalWorkseatRatio = project?.totalWorkseatRatio || 0;
    this.totalNumOfWorkseats = project?.totalNumOfWorkseats || 0;
    this.totalNumOfCollabseats = project?.totalNumOfCollabseats || 0;
    this.totalCollaborationRatio = project?.totalCollaborationRatio || 0;
  }

  constructor() {
    this.initialize();
  }
}
