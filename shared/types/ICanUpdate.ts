import { IHasId } from "./Project";

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface ICanUpdate {

}

export interface IUpdateable extends IHasId{
  updateData:(element) => void;
}