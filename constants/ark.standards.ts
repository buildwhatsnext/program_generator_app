import PROGRAMS from './ark.programs';
import { ROUTES } from './routes';

export interface SpaceDisplayStandard {
  name: string;
  color: string;
  border?: string;
  route: string;
}

export const SPACE_STANDARDS: { [name: string]: SpaceDisplayStandard } = {
  UNPLANNED: {
    name: PROGRAMS.UNPLANNED,
    color: '#ffffff',
    border: '#06038D',
    route: ROUTES.INFO.CONSTRAINTS
  },
  CIRCULATION: {
    name: PROGRAMS.CIRCULATION,
    color: '#c4c4c4',
    route: ROUTES.INFO.TARGET
  },
  ENCLOSED_OFFICE: {
    name: PROGRAMS.ENCLOSED_OFFICE,
    color: '#06038D',
    route: ROUTES.PROGRAM.ENCLOSED
  },
  OPEN_OFFICE_AREA: {
    name: PROGRAMS.OPEN_OFFICE_AREA,
    color: '#0097cc',
    route: ROUTES.PROGRAM.OPEN_PLAN
  },
  MEETING: {
    name: PROGRAMS.MEETING,
    color: '#ffcc00',
    route: ROUTES.PROGRAM.MEETING
  },
  AMENITY: {
    name: PROGRAMS.AMENITY,
    color: '#F08A02',
    route: ROUTES.PROGRAM.AMENITY
  },
  SUPPORT: {
    name: PROGRAMS.SUPPORT,
    color: '#92d050',
    route: ROUTES.PROGRAM.SUPPORT
  },
  BROADCAST: {
    name: PROGRAMS.BROADCAST,
    color: '#7030A0',
    route: ROUTES.PROGRAM.BROADCAST
  },
  LAB: {
    name: PROGRAMS.LAB,
    color: '#ff0000',
    route: ROUTES.PROGRAM.LAB
  },
}
