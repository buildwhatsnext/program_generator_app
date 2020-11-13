import React from 'react';
import { useSelector } from 'react-redux';
import { selectBuilding } from '../../client/features/building/building.slice';
import GeneralConstraints from '../../client/features/building/building.constraints';

export default function GeneralConstraintsPage() {
  const { areaGross, areaNet, floors } = useSelector(selectBuilding);
  const state = [areaGross, areaNet, floors];
  const hasPrevState = state.some(val => val !== null);

  return <GeneralConstraints hasPrevState={hasPrevState} />;
}
