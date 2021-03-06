import React from 'react'
import { ProgramTransition } from './space.transition';
import { ROUTES } from '../../../shared/constants/routes';

export function OpenOfficeUpdate() {
  const desc = `Let's take a look at the meeting space requirements`;
  const forward = `Start Meeting Spaces`;

  return (
    <ProgramTransition 
      desc={desc}
      fwdBtnText={forward}
      to={ROUTES.SPACE.MEETING}
    />
  )
}