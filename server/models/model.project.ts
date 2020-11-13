import * as uuid from 'uuid';
import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, PrimaryColumn } from "typeorm"
import { IProject } from '../../shared/types/Project';

@Entity('projects')
export default class ProjectModel implements IProject {
  @PrimaryColumn({type: 'uuid' })
  id: string;

  @Column({type: 'varchar', default: ''})
  name: string;

  @Column({type: 'varchar',  default: ''})
  client: string;

  @Column({type: 'numeric', default: -1})
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

    this.setProjectData(project);
  }

  setProjectData(project: IProject) {
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