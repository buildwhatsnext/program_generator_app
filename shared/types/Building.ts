import * as uuid from 'uuid';
import { ICanUpdate } from "./ICanUpdate";
import { IHasId } from "./Project";

export interface IBuilding extends IHasId, ICanUpdate {
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

export class Building implements IBuilding {
  id: string;
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

  private initialize(): void {
    this.id = uuid.v4().toString();
  }
}