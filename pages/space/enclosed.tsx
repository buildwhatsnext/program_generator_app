import React from 'react';
import { useSelector } from 'react-redux';
import { ROUTES } from '../../constants/routes';
import { EnclosedOfficeSpace } from '../../components/spaces/Space';
import { hydrateSpaceState } from '../../features/space/space.functions';
import { GenericSpacePage } from '../../features/space/space.generic';
import { selectProgram, setEnclosedData, setEnclosedTotalArea } from '../../features/space/space.slice';

export default function EnclosedWorkspacePage() {
  // const program = useSelector(selectProgram);
  // const hasPrevState = program.EnclosedState.length > 0;

  // const hydratedState = hydrateSpaceState<EnclosedOfficeSpace>(program.EnclosedState);

  return (
    <GenericSpacePage 
      title='Enclosed Offices'
      nextRoute={ROUTES.SPACE.ENCLOSED_UPDATE}
      stateName='EnclosedState'
      type={EnclosedOfficeSpace}
      storeHandler={setEnclosedData}
      areaHandler={setEnclosedTotalArea}
      // hasPrevState={hasPrevState}
      // prevState={hydratedState}
    />
  )
}