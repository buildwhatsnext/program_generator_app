import { IHasId } from "./Project";

export interface INamedPerson extends IHasId {
  name?: string;
  dateCreated?: string;
  dateModified?: string;
}