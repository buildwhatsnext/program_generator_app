import React from 'react'
import { ProgramTransition } from './space.transition';
import { ROUTES } from '../../constants/routes';

export function ProgramStart() {
  const desc = `Let's take a look at the enclosed office workspace requirements`;
  const forward = `Start Enclosed Offices`;

  return (
    <ProgramTransition 
      desc={desc}
      fwdBtnText={forward}
      to={ROUTES.SPACE.ENCLOSED}
    />
  )
}