import * as uuid from 'uuid';
import 'reflect-metadata';
import moment from 'moment';
import { Entity, Column, OneToMany, PrimaryColumn, JoinColumn } from "typeorm"
import { IProject, Project } from '../../shared/types/Project';
import { BuildingModel } from './model.building';
import { IUpdateable } from '../../shared/types/ICanUpdate';
import SpaceModel from './model.space';

@Entity()
export default class ProjectModel extends Project implements IUpdateable {
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

  @Column({type: 'varchar', default: moment().format('LL')})
  dateCreated: string;

  @Column({type: 'varchar', default: moment().format('LL')})
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

  @OneToMany(type => SpaceModel, space => space.project, {cascade: true})
  spaces: Partial<SpaceModel>[];

  // @OneToMany(() => BuildingModel, 
  //   bldg => bldg.project
  // )
  // buildings: BuildingModel[];

  setData(project: Partial<ProjectModel>) {
    super.initialize();
    this.id = project?.id || uuid.v4();
    const now = moment().format('LL');
    this.dateCreated = project?.dateCreated || now;
    this.dateModified = now;

    this.updateData(project)
  }

  updateData(project?: Partial<IProject> | Partial<ProjectModel>) {
    if(project && this.id !== project?.id){
      throw new Error(
        `This is not the same element.
        check IDS: ObjA: ${this.id} ObjB: ${project.id}`
      );
    }
    
    this.name = project?.name || null;
    this.tenancy = project?.tenancy || null;
    this.hasBroadcast = project?.hasBroadcast || null;
    this.hasLab = project?.hasLab || null;
    this.client = project?.client || null;
    this.units = project?.units || null;
    this.modifiedBy = project?.modifiedBy || null;
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
    this.spaces = (project as ProjectModel)?.spaces;
  }

  constructor(project?: Partial<ProjectModel>) {
    super();
    this.setData(project);
  }
}
