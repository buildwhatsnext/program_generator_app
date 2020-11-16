/* eslint-disable no-nested-ternary */
import React from 'react'
import { useSelector } from 'react-redux';
import { ProgramTransition } from './space.transition';
import { selectOverview } from '../info/info.slice';
import { calculatePageAfterSupport } from '../../components/Navigator';

export function SupportSpaceUpdate() {
  const { hasBroadcast, hasLab } = useSelector(selectOverview);
  const nextRoute = calculatePageAfterSupport(hasBroadcast, hasLab);

  const next = hasBroadcast 
                ? 'broadcast space requirements' 
                :  hasLab
                  ? 'lab space requirements' 
                  : 'whole picture';
                  
  const desc = `Let's take a look at the ${next}`;
  const forward = hasBroadcast 
                    ? 'Start Broadcast Spaces'
                    : hasLab 
                      ? 'Start Lab'
                      : 'Finalize Building Quantities';

  return (
    <ProgramTransition 
      desc={desc}
      fwdBtnText={forward}
      to={nextRoute}
    />
  )
}

