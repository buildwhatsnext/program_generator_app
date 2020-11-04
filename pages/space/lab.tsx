import React from 'react';
import { useSelector } from 'react-redux';
import { LabSpace } from '../../components/spaces/Space';
import { hydrateSpaceState } from '../../features/space/space.functions';
import { selectProgram, setLabData, setLabTotalArea } from '../../features/space/space.slice';
import { ROUTES } from '../../constants/routes';
import { GenericSpacePage } from '../../features/space/space.generic';

export default function LabSpacePage() {
  const program = useSelector(selectProgram);
  const hasPrevState = program.LabState.length > 0;

  const hydratedState = hydrateSpaceState<LabSpace>(program.LabState);

  return (
    <GenericSpacePage 
      pageTitle='Lab Spaces'
      nextRoute={ROUTES.SPACE.LAB_UPDATE}
      type={LabSpace}
      storeHandler={setLabData}
      areaHandler={setLabTotalArea}
      hasPrevState={hasPrevState}
      prevState={hydratedState}
    />
  )
}