import React from 'react'
import { ProgramTransition } from './program.transition';
import { ROUTES } from '../../constants/routes';

export function ProgramStart() {
  const desc = `Let's take a look at the open plan workspace requirements`;
  const forward = `Start Open Plan`;

  return (
    <ProgramTransition 
      desc={desc}
      fwdBtnText={forward}
      to={ROUTES.PROGRAM.ENCLOSED}
    />
  )
}