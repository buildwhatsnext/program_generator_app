import React from 'react';
import { useSelector } from '../../client/features/project/node_modules/react-redux';
import { selectOverview } from '../../client/features/project/info.slice';
import GeneralConstraints from '../../client/features/project/general.constraints';

export default function GeneralConstraintsPage() {
  const { areaGross, areaNet, floors } = useSelector(selectOverview);
  const state = [areaGross, areaNet, floors];
  const hasPrevState = state.some(val => val !== null);

  return <GeneralConstraints hasPrevState={hasPrevState} />;
}
