import { NextRouter, useRouter } from 'next/router';
import { SpaceDisplayStandard, SPACE_STANDARDS } from '../constants/ark.standards';
import { ROUTES } from '../constants/routes';

export default class AppNavigation{
  static routeByProgram(program: string, router: NextRouter) {
    // const router = useRouter();,
    const standard = SPACE_STANDARDS;
    router.push(standard[program.toUpperCase()].route);
  }
}

export function calculatePageAfterBroadcast(_hasLab:boolean) {
  return _hasLab ? ROUTES.SPACE.LAB : ROUTES.SPACE.END;
}

export function calculatePageAfterSupport(_hasBroadcast, _hasLab) {
  return _hasBroadcast ? ROUTES.SPACE.BROADCAST : calculatePageAfterBroadcast(_hasLab);
}

