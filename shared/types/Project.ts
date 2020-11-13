import { ICanUpdate } from "./ICanUpdate";

export interface IHasId {
  id: string;
}

export interface IProject extends IHasId, ICanUpdate {
  name: string;
  client: string;
  tenancy: string;
  units: string;
  hasBroadcast: boolean;
  hasLab: boolean;
  createdBy: string;
  modifiedBy: string;
  dateCreated: string;
  dateModified: string;
}
