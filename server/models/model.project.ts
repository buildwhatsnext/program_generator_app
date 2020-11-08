import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { IProject } from '../../shared/types/Project';

@Entity({name: 'Projects'})
export default class ProjectModel implements IProject {
  @PrimaryGeneratedColumn({name: 'Z_PK'})
  id: string;

  @Column({name: 'NAME', type: 'varchar', default: ''})
  name: string;

  @Column({name: 'Z_TENANCY', type: 'numeric', default: -1})
  tenancy: number;

  @Column({name: 'Z_IS_BROADCAST', type: "boolean", default: false})
  isBroadcast: boolean;

  @Column({name: 'Z_IS_LAB', type: "boolean", default: false })
  isLab: boolean;

  @Column({name: 'Z_CLIENT',type: 'varchar',  default: ''})
  client: string;

  @Column({name: 'Z_CREATED_BY', type: 'varchar', default: ''})
  createdBy: string;

  @Column({name: 'Z_MODIFIED_BY', type: 'varchar', default: ''})
  modifiedBy: string;

  @Column({name: 'Z_DATE_CREATED', type: 'datetime', default: Date.now()})
  dateCreated: string;

  @Column({name: 'Z_DATE_MODIFIED', type: 'datetime',default: Date.now()})
  dateModified: string;

}