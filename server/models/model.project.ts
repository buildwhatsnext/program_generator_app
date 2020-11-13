import * as uuid from 'uuid';
import 'reflect-metadata';
import { Entity, Column, OneToMany, PrimaryColumn } from "typeorm"
import { IProject } from '../../shared/types/Project';
import { BuildingModel } from './model.building';
import { IUpdateable } from '../../shared/types/ICanUpdate';

@Entity('projects')
export default class ProjectModel implements IProject, IUpdateable<IProject> {
  @PrimaryColumn({type: 'uuid' })
  id: string;

  @Column({type: 'varchar', default: ''})
  name: string;

  @Column({type: 'varchar',  default: ''})
  client: string;

  @Column({type: 'varchar', default: ''})
  tenancy: string;

  @Column({type: 'varchar',  default: ''})
  units: string;

  @Column({type: "boolean", default: false})
  hasBroadcast: boolean;

  @Column({type: "boolean", default: false })
  hasLab: boolean;

  @Column({type: 'varchar', default: ''})
  createdBy: string;

  @Column({type: 'varchar', default: ''})
  modifiedBy: string;

  @Column({type: 'varchar', default: Date.now().toString()})
  dateCreated: string;

  @Column({type: 'varchar', default: Date.now().toString()})
  dateModified: string;

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

  updateData(project: IProject) {
    const { id, name, tenancy, hasBroadcast, hasLab, client, units, modifiedBy } = project;
    this.id = id;
    this.name = name;
    this.tenancy = tenancy;
    this.hasBroadcast = hasBroadcast;
    this.hasLab = hasLab;
    this.client = client;
    this.units = units;
    this.modifiedBy = modifiedBy;
  }

  constructor() {
    this.initialize()
  }
}
