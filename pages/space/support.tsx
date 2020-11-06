import React from 'react';
import { useSelector } from 'react-redux';
import { SupportSpace } from '../../components/spaces/Space';
import { hydrateSpaceState } from '../../features/space/space.functions';
import { selectProgram, setSupportData, setSupportTotalArea } from '../../features/space/space.slice';
import { ROUTES } from '../../constants/routes';
import { GenericSpacePage } from '../../features/space/space.generic';

export default function SupportSpacePage() {
  // const program = useSelector(selectProgram);
  // const hasPrevState = program.SupportState.length > 0;

  // const hydratedState = hydrateSpaceState<SupportSpace>(program.SupportState);

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