import React from 'react'
import { ProgramTransition } from './program.transition';
import { ROUTES } from '../../constants/routes';

export function MeetingSpaceUpdate() {
  const desc = `Let's take a look at the amenity space requirements`;
  const forward = `Start Amenities`;

  return (
    <ProgramTransition 
      desc={desc}
      fwdBtnText={forward}
      to={ROUTES.PROGRAM.AMENITY}
    />
  )
}