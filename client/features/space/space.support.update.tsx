import React from 'react'
import { ProgramTransition } from './space.transition';
import { ROUTES } from '../../../shared/constants/routes';

export function SupportSpaceUpdate() {
  const desc = `Let's take a look at the broadcast space requirements`;
  const forward = `Start Broadcast Spaces`;

  return (
    <ProgramTransition 
      desc={desc}
      fwdBtnText={forward}
      to={ROUTES.SPACE.BROADCAST}
    />
  )
}