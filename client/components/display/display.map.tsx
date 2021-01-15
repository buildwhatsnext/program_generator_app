import { ProgramState } from '../../../shared/types/Program';
import PROGRAMS from '../../../shared/constants/ark.programs';
import { SpaceDisplayCollection } from '../../../shared/constants/ark.standards';
import ProjectModel from '../../../server/models/model.project';

export interface ISpatialMap {
  area: number,  
  name: string;
  color: string;
  hoverBackgroundColor: string;
  border?: string;
  route: string;
}

export function createSpatialMap(state: ProgramState, overview: ProjectModel, standards: SpaceDisplayCollection, ratiosOnly?: boolean): ISpatialMap[] { 
  const spatialMap: ISpatialMap[] = [];

  const {
    // totalAreaBuilding,
    totalAreaUnprogrammed,
    totalAreaHold,
    totalAreaEnclosed,
    totalAreaOpen,
    totalAreaMeeting,
    totalAreaAmenity,
    totalAreaSupport,
    totalAreaBroadcast,
    totalAreaLab,
  } = state;

  const spatialDataArray = !ratiosOnly ? [
    totalAreaUnprogrammed,
    totalAreaHold,
    totalAreaEnclosed,
    totalAreaOpen,
    totalAreaMeeting,
    totalAreaAmenity,
    totalAreaSupport,
    totalAreaBroadcast,
    totalAreaLab,
  ] : [ 
    totalAreaEnclosed,
    totalAreaOpen,
  ];

  const { hasLab, hasBroadcast } = overview;

  if(!hasLab)
    delete standards.LAB;

  if (!hasBroadcast)
    delete standards.BROADCAST;
  
  // console.log(spatialDataArray);
  const keys = !ratiosOnly 
    ? PROGRAMS 
    : { 
      ENCLOSED_OFFICE: 'Offices',
      OPEN_OFFICE_AREA: 'Open Office Area'
    }

  Object.keys(keys).forEach((key, i) => {
    const data = standards[key];

    if(!data)
      return;

    const area = spatialDataArray[i];
    
    spatialMap.push({
      area,
      name: data.name,
      color: data.color,
      hoverBackgroundColor: data.hoverBackgroundColor,
      border: data.border,
      route: data.route
    });
  })

  let final = []

  final = spatialMap.filter((slice) => slice.area > 0);

  return final;
}

export interface CompiledData {
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  hoverBackgroundColor: string[]
  extraData?: any[]
}

export interface DisplayDataset {
  data: CompiledData[];
  // data: number[];
  labels: string[];
}

export function createSpatialDataSet(areaData: ISpatialMap[]): DisplayDataset {
  const data = Object.values(areaData).map(space => space.area);
  const labels = Object.values(areaData).map(space => space.name);
  const colors = Object.values(areaData).map(space => space.color);
  const borders = Object.values(areaData).map(space => space.border);
  const hoverColor = Object.values(areaData).map(space => space.hoverBackgroundColor);

  const dataCompiled = [{
    data,
    backgroundColor: colors,
    borderColor: borders,
    hoverBackgroundColor: hoverColor,
    extraData: ['someData', 'someData', 'someData', 'someData']
  }];

  return {
    data: dataCompiled,
    labels
  }
}
