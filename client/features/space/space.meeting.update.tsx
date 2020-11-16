import React from 'react'
import { ProgramTransition } from './space.transition';
import { ROUTES } from '../../../shared/constants/routes';

export function MeetingSpaceUpdate() {
  const desc = `Let's take a look at the amenity space requirements`;
  const forward = `Start Amenities`;

  return (
    <ProgramTransition 
      desc={desc}
      fwdBtnText={forward}
      to={ROUTES.SPACE.AMENITY}
    />
  )
}