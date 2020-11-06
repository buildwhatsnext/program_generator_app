import React from 'react'
import { useSelector } from 'react-redux';
import { ProgramTransition } from './space.transition';
import { selectOverview } from '../info/info.slice';
import { ROUTES } from '../../constants/routes';
import { calculatePageAfterBroadcast } from '../../components/Navigator';

export function BroadcastSpaceUpdate() {
  const desc = `Let's take a look at the lab space requirements`;
  const forward = `Start Lab Spaces`;
  const { hasLab } = useSelector(selectOverview);

  const nextRoute = calculatePageAfterBroadcast(hasLab);

  return (
    <ProgramTransition 
      desc={desc}
      fwdBtnText={forward}
      to={nextRoute}
    />
  )
}