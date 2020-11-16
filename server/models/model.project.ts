import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { IProject } from '../../shared/types/Project';

@Entity('projects')
export default class ProjectModel implements IProject {
  @PrimaryGeneratedColumn({type: 'integer'})
  id: number;

  @Column({type: 'varchar', default: ''})
  name: string;

  @Column({type: 'numeric', default: -1})
  tenancy: number;

  @Column({type: "boolean", default: false})
  hasBroadcast: boolean;

  @Column({type: "boolean", default: false })
  hasLab: boolean;

  @Column({type: 'varchar',  default: ''})
  client: string;

  @Column({type: 'varchar',  default: ''})
  units: string;

  @Column({type: 'varchar', default: ''})
  createdBy: string;

  @Column({type: 'varchar', default: ''})
  modifiedBy: string;

  @Column({type: 'varchar', default: Date.now().toString()})
  dateCreated: string;

  @Column({type: 'varchar', default: Date.now().toString()})
  dateModified: string;

  initialize() {
    this.name = 'Untitled Project';
  }

  constructor() {
    this.initialize()
  }
}