/* eslint-disable lines-between-class-members */
/* eslint-disable class-methods-use-this */
export interface IProgramOverview {
  client: string;
  units: 'unknown' | 'metric' | 'imperial' ;
  tenancy: 'unknown' | 'single' | 'multiple';
  hasBroadcast: boolean;
  hasLab: boolean;
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

export class ProgramOverview implements IProgramOverview{
  client: string;
  units: "unknown" | "metric" | "imperial";
  tenancy: "unknown" | "single" | "multiple";
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


  initialize(){
    this.client = '';
    this.units = 'unknown';
    this.tenancy = 'unknown';
    this.hasBroadcast = false;
    this.hasLab = false;
    this.areaGross = 0;
    this.areaNet = 0;
    this.floors = 0;
    this.targetFactorCirculation = 0;
    this.targetFactorLoss = 0;
    this.targetAreaPerWorkseat = 0;
    this.targetNumOfWorkseats = 0;
    this.totalProgrammedArea = 0;
    this.totalWorkseatRatio = 0;
    this.totalNumOfWorkseats = 0;
    this.totalNumOfCollabseats = 0;
    this.totalCollaborationRatio = 0;
  }
}
