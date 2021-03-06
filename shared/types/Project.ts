import {IUpdateable } from "./ICanUpdate";

export interface IHasId {
  id: string;
}

export interface IProject extends IUpdateable {
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

export class Project {
  id: string;
  name: string;
  createdBy: string;
  modifiedBy: string;
  dateCreated: string;
  dateModified: string;
  client: string;
  units: string;
  tenancy: string;
  hasBroadcast: boolean;
  hasLab: boolean;
  areaGross: number;
  areaNet: number;
  floors: number;
  targetFactorCirculation: number;
  targetFactorLoss: number;
  targetAreaPerWorkseat: number;
  targetNumOfWorkseats: number;
  totalProgrammedArea: number;
  totalWorkseatRatio: number;
  totalNumOfWorkseats: number;
  totalNumOfCollabseats: number;
  totalCollaborationRatio: number;

  constructor() {
    this.initialize();
  }

  protected initialize(){
    this.id = null;
    this.client = null;
    this.units = null;
    this.tenancy = null;
    this.hasBroadcast = null;
    this.hasLab = null;
    this.areaGross = null;
    this.areaNet = null;
    this.floors = null;
    this.targetFactorCirculation = null;
    this.targetFactorLoss = null;
    this.targetAreaPerWorkseat = null;
    this.targetNumOfWorkseats = null;
    this.totalProgrammedArea = null;
    this.totalWorkseatRatio = null;
    this.totalNumOfWorkseats = null;
    this.totalNumOfCollabseats = null;
    this.totalCollaborationRatio = null;
  }
}
