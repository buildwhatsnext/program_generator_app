import { NextRouter, useRouter } from 'next/router';
import { SpaceDisplayStandard, SPACE_STANDARDS } from '../constants/ark.standards';

export default class AppNavigation{
  static routeByProgram(program: string, router: NextRouter) {
    // const router = useRouter();,
    const standard = SPACE_STANDARDS;
    router.push(standard[program.toUpperCase()].route);
  }
}