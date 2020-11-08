import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { INamedPerson } from './NamedPerson';

export interface IUser extends INamedPerson {
  email?: string;
  department?: string;
}
