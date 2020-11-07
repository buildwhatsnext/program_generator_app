import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { IProject } from '../../client/features/project/project.type';

@Entity("Project")
export default class ProjectModel implements IProject {
  @PrimaryGeneratedColumn({name: 'Z_PK'})
  id: string;

  @Column({name: 'Z_NAME'})
  name?: string;

  @Column({name: 'Z_TENANCY'})
  tenancy?: number;

  @Column({name: 'Z_IS_BROADCAST', type: "boolean"})
  isBroadcast?: boolean;

  @Column({name: 'Z_IS_LAB', type: "boolean"})
  isLab?: boolean;

  @Column({name: 'Z_CLIENT'})
  client?: string;

  @Column({name: 'Z_CREATED_BY'})
  createdBy?: string;

  @Column({name: 'Z_MODIFIED_BY'})
  modifiedBy?: string;

  @Column({name: 'Z_DATE_CREATED'})
  dateCreated: string;

  @Column({name: 'Z_DATE_MODIFIED'})
  dateModified: string;

}