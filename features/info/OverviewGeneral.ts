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
