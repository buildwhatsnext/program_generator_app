import React from 'react';
import { useSelector } from 'react-redux';
import { selectOverview } from '../../client/features/info/info.slice';
import GeneralBldgInfo from '../../client/features/info/general.building';

export default function GeneralBuildingInfoPage() {
  const { client, units, tenancy, hasBroadcast, hasLab } = useSelector(selectOverview);

  const state = [client, units, tenancy, hasBroadcast, hasLab];

  const hasPrevState = state.some(val => val !== null);

  return <GeneralBldgInfo hasPrevState={hasPrevState} />;
}
