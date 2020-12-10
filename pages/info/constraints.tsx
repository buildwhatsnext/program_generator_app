import React from 'react';
import { useSelector } from 'react-redux';
import { selectOverview } from '../../client/features/project/project.slice';
import GeneralConstraints from '../../client/features/project/project.constraints';

export default function GeneralConstraintsPage() {
  const { areaGross, areaNet, floors } = useSelector(selectOverview);
  const state = [areaGross, areaNet, floors];
  const hasPrevState = state.some(val => val !== null);

  return <GeneralConstraints hasPrevState={hasPrevState} prevState={{...state}} />;
}
