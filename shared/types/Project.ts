export interface IProject {
  id: string;
  name?: string;
  tenancy?: number;
  isBroadcast?: boolean;
  isLab?: boolean;
  client?: string;
  createdBy?: string;
  modifiedBy?: string;
  dateCreated: string;
  dateModified: string;
}
