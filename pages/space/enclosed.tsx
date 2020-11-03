import React from 'react';
import { useSelector } from 'react-redux';
import { selectProgram } from '../../features/space/space.slice';
import { EnclosedWorkspaces } from '../../features/space/space.enclosed';

export default function EnclosedWorkspacePage() {
  const { EnclosedState } = useSelector(selectProgram);
  const hasPrevState = EnclosedState.length > 0;

  return <EnclosedWorkspaces hasPrevState={hasPrevState} prevState={EnclosedState} />
}