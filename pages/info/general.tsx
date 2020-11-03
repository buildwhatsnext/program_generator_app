import React from 'react';
import { useSelector } from 'react-redux';
import { selectOverview } from '../../features/info/info.slice';
import GeneralBldgInfo from '../../features/info/general.building';

export default function GeneralBuildingInfoPage() {
  const { hasPrevState } = useSelector(selectOverview);

  return <GeneralBldgInfo hasPrevState={hasPrevState} />;
}
