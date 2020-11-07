import React from 'react';
import { BroadcastSpace } from '../../shared/types/Space';
import { setBroadcastData, setBroadcastTotalArea } from '../../client/features/space/space.slice';
import { ROUTES } from '../../shared/constants/routes';
import { GenericSpacePage } from '../../client/features/space/space.generic';

export default function BroadcastSpacePage() {

  return (
    <GenericSpacePage 
      title='Broadcast Spaces'
      stateName='BroadcastState'
      nextRoute={ROUTES.SPACE.BROADCAST_UPDATE}
      type={BroadcastSpace}
      storeHandler={setBroadcastData}
      areaHandler={setBroadcastTotalArea}
    />
  )
}