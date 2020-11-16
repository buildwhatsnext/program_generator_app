import React from 'react'
import { useSelector } from 'react-redux';
import { ProgramTransition } from './space.transition';
import { selectOverview } from '../project/project.slice';
import { calculatePageAfterBroadcast } from '../../components/Navigator';
import { ROUTES } from '../../../shared/constants/routes';

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