import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { IProject } from '../../shared/types/Project';

@Entity({name: 'Projects'})
export default class ProjectModel implements IProject {
  @PrimaryGeneratedColumn({type: 'integer'})
  id: number;

  @Column({type: 'varchar', default: ''})
  name: string;

  @Column({type: 'numeric', default: -1})
  tenancy: number;

  @Column({type: "boolean", default: false})
  isBroadcast: boolean;

  @Column({type: "boolean", default: false })
  isLab: boolean;

  @Column({type: 'varchar',  default: ''})
  client: string;

  @Column({type: 'varchar', default: ''})
  createdBy: string;

  @Column({type: 'varchar', default: ''})
  modifiedBy: string;

  @Column({type: 'varchar', default: Date.now().toString()})
  dateCreated: string;

  @Column({type: 'varchar', default: Date.now().toString()})
  dateModified: string;

}