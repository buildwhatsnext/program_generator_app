import React from 'react'
import { ProgramTransition } from './space.transition';
import { ROUTES } from '../../../shared/constants/routes';

export function BroadcastSpaceUpdate() {
  const desc = `Let's take a look at the lab space requirements`;
  const forward = `Start Lab Spaces`;

  return (
    <ProgramTransition 
      desc={desc}
      fwdBtnText={forward}
      to={ROUTES.SPACE.LAB}
    />
  )
}