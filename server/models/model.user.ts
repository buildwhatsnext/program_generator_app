import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { IUser } from '../../shared/types/User';

@Entity({name: 'Users'})
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({name: 'email', nullable: true })
  email: string;

  @Column({name: 'department', type:'varchar', nullable: true })
  department: string;

  @Column({name: 'dateCreated', type: 'datetime', default: Date.now()})
  dateCreated: string;

  @Column({name: 'dateModified', type: 'datetime', default: Date.now()})
  dateModified: string;
}