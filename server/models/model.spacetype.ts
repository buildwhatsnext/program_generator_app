import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, OneToMany } from "typeorm"

@Entity({name: 'SpaceTypes'})
export default class SpaceTypeModel {
  @PrimaryColumn({type: 'varchar'})
  type: string;

  @Column({type: 'numeric', nullable: false})
  sequence: number;
}