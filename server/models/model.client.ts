import { Guid } from "guid-typescript";
import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm";
import moment from 'moment';
import { IClient } from "../../shared/types/Client";

@Entity({name: 'Clients'})
export class ClientModel implements IClient {
  @PrimaryColumn({type: 'varchar', default: Guid.create().toString()})
  id: string;

  @Column({type: 'varchar', nullable: true})
  name?: string;

  @Column({type: 'varchar', nullable: true})
  company?: string;

  @Column({type: 'varchar', default: moment().format('LL')})
  dateCreated: string;

  @Column({type: 'varchar', default: moment().format('LL')})
  dateModified: string;
}