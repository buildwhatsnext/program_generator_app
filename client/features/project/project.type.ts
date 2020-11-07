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

export interface INamedPerson {
  id?: string;
  name?: string;
  dateCreated?: string;
  dateModified?: string;
}

export interface IClient extends INamedPerson {
  company?: string;
}

export interface IUser extends INamedPerson {
  email?: string;
  department?: string;
}
