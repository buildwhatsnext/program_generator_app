import * as uuid from 'uuid';
import { IBuilding } from '../../shared/types/Project';

export class BuildingModel implements IBuilding {
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

  initialize() {
    this.id = uuid.v4();
  }

  constructor() {
    this.initialize()
  }
}