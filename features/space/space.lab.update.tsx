import React from 'react'
import { ProgramTransition } from './space.transition';
import { ROUTES } from '../../constants/routes';

export function LabSpaceUpdate() {
  const desc = `Now we'll take a look at the whole picture and you can update any information you think is necessary`;
  const forward = `Finalize Building Quantities`;

  return (
    <ProgramTransition 
      desc={desc}
      fwdBtnText={forward}
      to={ROUTES.SPACE.END}
    />
  )
}