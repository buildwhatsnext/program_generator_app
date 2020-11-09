export interface IProject {
  id: string;
  name?: string;
  tenancy?: number;
  hasBroadcast?: boolean;
  hasLab?: boolean;
  client?: string;
  createdBy?: string;
  modifiedBy?: string;
  dateCreated: string;
  dateModified: string;
}

export interface IBuilding {
  areaGross: number;
  areaNet: number;
  floors: number;
  targetFactorCirculation: number,
  targetFactorLoss: number,
  targetAreaPerWorkseat: number,
  targetNumOfWorkseats: number,
  totalProgrammedArea: number,
  totalWorkseatRatio: number,
  totalNumOfWorkseats: number,
  totalNumOfCollabseats: number,
  totalCollaborationRatio: number
}
