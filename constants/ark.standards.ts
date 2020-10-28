import { Space } from '../components/spaces/Space';
import PROGRAMS from './ark.programs';
import { ROUTES } from './routes';

export interface SpaceDisplayStandard {
  name: string;
  color: string;
  border?: string;
  route: string;
}

export const SPACE_STANDARDS: Record<string, SpaceDisplayStandard> = {
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
    route: ROUTES.SPACE.ENCLOSED
  },
  OPEN_OFFICE_AREA: {
    name: PROGRAMS.OPEN_OFFICE_AREA,
    color: '#0097cc',
    route: ROUTES.SPACE.OPEN_PLAN
  },
  MEETING: {
    name: PROGRAMS.MEETING,
    color: '#ffcc00',
    route: ROUTES.SPACE.MEETING
  },
  AMENITY: {
    name: PROGRAMS.AMENITY,
    color: '#F08A02',
    route: ROUTES.SPACE.AMENITY
  },
  SUPPORT: {
    name: PROGRAMS.SUPPORT,
    color: '#92d050',
    route: ROUTES.SPACE.SUPPORT
  },
  BROADCAST: {
    name: PROGRAMS.BROADCAST,
    color: '#7030A0',
    route: ROUTES.SPACE.BROADCAST
  },
  LAB: {
    name: PROGRAMS.LAB,
    color: '#ff0000',
    route: ROUTES.SPACE.LAB
  },
}
