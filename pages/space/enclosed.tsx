import React from 'react';
import { useSelector } from 'react-redux';
import { selectProgram } from '../../features/space/space.slice';
import { EnclosedWorkspaces } from '../../features/space/space.enclosed';
import { EnclosedOfficeSpace } from '../../components/spaces/Space';
import { hydrateSpaceState } from '../../features/space/space.functions';

export default function EnclosedWorkspacePage() {
  const program = useSelector(selectProgram);
  const hasPrevState = program.EnclosedState.length > 0;

  const hydratedState = hydrateSpaceState<EnclosedOfficeSpace>(program.EnclosedState);

  return <EnclosedWorkspaces hasPrevState={hasPrevState} prevState={hydratedState} />
}