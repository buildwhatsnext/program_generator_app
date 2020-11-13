import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm"
import { IUser } from '../../shared/types/User';

@Entity({name: 'Users'})
export class User implements IUser {
  @PrimaryColumn({type:'uuid'})
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({name: 'email', nullable: true })
  email: string;

  @Column({name: 'department', type:'varchar', nullable: true })
  department: string;

  @Column({name: 'dateCreated', type: 'varchar', default: Date.now().toString()})
  dateCreated: string;

  @Column({name: 'dateModified', type: 'varchar', default: Date.now().toString()})
  dateModified: string;
}