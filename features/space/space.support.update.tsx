import React from 'react'
import { useSelector } from 'react-redux';
import { ProgramTransition } from './space.transition';
import { selectOverview } from '../info/info.slice';
import { calculatePageAfterSupport } from '../../components/Navigator';

export function SupportSpaceUpdate() {
  const desc = `Let's take a look at the broadcast space requirements`;
  const forward = `Start Broadcast Spaces`;
  const { hasBroadcast, hasLab } = useSelector(selectOverview);

  const nextRoute = calculatePageAfterSupport(hasBroadcast, hasLab);

  return (
    <ProgramTransition 
      desc={desc}
      fwdBtnText={forward}
      to={nextRoute}
    />
  )
}

