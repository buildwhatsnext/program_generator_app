export interface IHasId {
  id: string;
}

export interface IProject extends IHasId {
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

export interface IBuilding extends IHasId {
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
