/* eslint-disable lines-between-class-members */
import { IFloor, IProgram, IUnplacedSpaceCollection } from '../../components/spaces/space.type';

/* 
@ratio - should be a decimal
*/
export interface IProgramTotals {
  total_offices: number;
  total_open_workspaces: number;
  total_meeting_spaces: number;
  total_amenity_spaces: number;
  total_support_spaces: number;
  total_workseats: number;
  ratio: number; 
}

export interface IBuildingProgram extends IProgram {
  overview: IBuildingOverview;
}

export class BuildingProgram implements IBuildingProgram {
  name: string;
  overview: IBuildingOverview;
  spaces: IUnplacedSpaceCollection;
  floors: IFloor[];
}