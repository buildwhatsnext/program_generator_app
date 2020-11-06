import React from 'react';
import { useSelector } from 'react-redux';
import { BroadcastSpace } from '../../components/spaces/Space';
import { hydrateSpaceState } from '../../features/space/space.functions';
import { selectProgram, setBroadcastData, setBroadcastTotalArea } from '../../features/space/space.slice';
import { ROUTES } from '../../constants/routes';
import { GenericSpacePage } from '../../features/space/space.generic';

export default function BroadcastSpacePage() {
  // const program = useSelector(selectProgram);
  // const hasPrevState = program.BroadcastState.length > 0;

  // const hydratedState = hydrateSpaceState<BroadcastSpace>(program.BroadcastState);

  return (
    <GenericSpacePage 
      title='Broadcast Spaces'
      stateName='BroadcastState'
      nextRoute={ROUTES.SPACE.BROADCAST_UPDATE}
      type={BroadcastSpace}
      storeHandler={setBroadcastData}
      areaHandler={setBroadcastTotalArea}
      // hasPrevState={hasPrevState}
      // prevState={hydratedState}
    />
  )
}