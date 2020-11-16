export interface IProject {
  id: number;
  name: string;
  tenancy: number;
  units: string;
  hasBroadcast: boolean;
  hasLab: boolean;
  client: string;
  createdBy: string;
  modifiedBy: string;
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
