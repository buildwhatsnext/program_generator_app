import React from 'react';
import { useSelector } from 'react-redux';
import { selectOverview } from '../../client/features/project/info.slice';
import GeneralBldgInfo from '../../client/features/project/project.basics';

export default function GeneralBuildingInfoPage() {
  const { client, units, tenancy, hasBroadcast, hasLab } = useSelector(selectOverview);

  const state = [client, units, tenancy, hasBroadcast, hasLab];

  const hasPrevState = state.some(val => val !== null);

  return <GeneralBldgInfo hasPrevState={hasPrevState} />;
}
