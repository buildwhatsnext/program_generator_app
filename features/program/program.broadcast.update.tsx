import React from 'react'
import { ProgramTransition } from './program.transition';
import { ROUTES } from '../../constants/routes';

export function BroadcastSpaceUpdate() {
  const desc = `Let's take a look at the lab space requirements`;
  const forward = `Start Lab Spaces`;

  return (
    <ProgramTransition 
      desc={desc}
      fwdBtnText={forward}
      to={ROUTES.PROGRAM.LAB}
    />
  )
}