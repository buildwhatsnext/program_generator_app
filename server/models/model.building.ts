import { IBuilding } from '../../shared/types/Project';

export class BuildingModel implements IBuilding {
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
  
}