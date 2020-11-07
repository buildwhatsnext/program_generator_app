import React from 'react';
import { LabSpace } from '../../client/components/spaces/Space';
import { setLabData, setLabTotalArea } from '../../client/features/space/space.slice';
import { ROUTES } from '../../shared/constants/routes';
import { GenericSpacePage } from '../../client/features/space/space.generic';

export default function LabSpacePage() {
  return (
    <GenericSpacePage 
      title='Lab Spaces'
      nextRoute={ROUTES.SPACE.LAB_UPDATE}
      type={LabSpace}
      stateName='LabState'
      storeHandler={setLabData}
      areaHandler={setLabTotalArea}
    />
  )
}