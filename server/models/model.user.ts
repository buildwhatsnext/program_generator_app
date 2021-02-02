import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import moment from 'moment';
import { IUser } from '../../shared/types/User';

@Entity({name: 'Users'})
export class UserModel implements IUser {
  @PrimaryColumn({type:'uuid'})
  id: string;

  @Column({type: 'varchar'})
  firstName: string;

  @Column({type: 'varchar'})
  lastName: string;

  @Column({type: 'varchar'})
  email: string;

  @Column({type: 'varchar'})
  department: string;

  @Column({name: 'dateCreated', type: 'varchar', default: moment().format('L')})
  dateCreated: string;

  @Column({name: 'dateModified', type: 'varchar', default: moment().format('L')})
  dateModified: string;
}