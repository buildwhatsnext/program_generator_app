import React from 'react';
import { useSelector } from 'react-redux';
import { SupportSpace } from '../../shared/types/Space';
import { hydrateSpaceState } from '../../client/features/space/space.functions';
import { selectProgram, setSupportData, setSupportTotalArea } from '../../client/features/space/space.slice';
import { ROUTES } from '../../shared/constants/routes';
import { GenericSpacePage } from '../../client/features/space/space.generic';

export default function SupportSpacePage() {
  return (
    <GenericSpacePage 
      title='Support Spaces'
      nextRoute={ROUTES.SPACE.SUPPORT_UPDATE}
      type={SupportSpace}
      stateName='SupportState'
      storeHandler={setSupportData}
      areaHandler={setSupportTotalArea}
    />
  )
}