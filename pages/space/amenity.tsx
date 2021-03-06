import React from 'react';
import { useSelector } from 'react-redux';
import { AmenitySpace } from '../../shared/types/Space';
import { hydrateSpaceState } from '../../client/features/space/space.functions';
import { selectProgram, setAmenityData, setAmenityTotalArea } from '../../client/features/space/space.slice';
import { ROUTES } from '../../shared/constants/routes';
import { GenericSpacePage } from '../../client/features/space/space.generic';

export default function AmenitySpacePage() {
  // const program = useSelector(selectProgram);
  // const hasPrevState = program.AmenityState.length > 0;

  // const hydratedState = hydrateSpaceState<AmenitySpace>(program.AmenityState);

  return (
    <GenericSpacePage 
      title='Amenity Spaces'
      nextRoute={ROUTES.SPACE.AMENITY_UPDATE}
      stateName='AmenityState'
      type={AmenitySpace}
      storeHandler={setAmenityData}
      areaHandler={setAmenityTotalArea}
      // hasPrevState={hasPrevState}
      // prevState={hydratedState}
    />
  )
}