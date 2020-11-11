import React from 'react';
import { useSelector } from '../../client/features/project/node_modules/react-redux';
import { SupportSpace } from '../../shared/types/Space';
import { hydrateSpaceState } from '../../client/features/space/space.functions';
import { selectProgram, setSupportData, setSupportTotalArea } from '../../client/features/space/space.slice';
import { ROUTES } from '../../shared/constants/routes';
import { GenericSpacePage } from '../../client/features/space/space.generic';

export default function SupportSpacePage() {
  const program = useSelector(selectProgram);
  const hasPrevState = program.SupportState.length > 0;

  const hydratedState = hydrateSpaceState<SupportSpace>(program.SupportState);

  return (
    <GenericSpacePage 
      title='Support Spaces'
      nextRoute={ROUTES.SPACE.SUPPORT_UPDATE}
      type={SupportSpace}
      stateName='SupportState'
      storeHandler={setSupportData}
      areaHandler={setSupportTotalArea}
      // hasPrevState={hasPrevState}
      // prevState={hydratedState}
    />
  )
}