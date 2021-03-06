import React from 'react'
import { ProgramTransition } from './space.transition';
import { ROUTES } from '../../../shared/constants/routes';

export function AmenitySpacesUpdate() {
  const desc = `Let's take a look at the support space requirements`;
  const forward = `Start Support Spaces`;

  return (
    <ProgramTransition 
      desc={desc}
      fwdBtnText={forward}
      to={ROUTES.SPACE.SUPPORT}
    />
  )
}