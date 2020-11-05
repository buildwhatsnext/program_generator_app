import React from 'react';
import { useSelector } from 'react-redux';
import { AmenitySpace } from '../../components/spaces/Space';
import { hydrateSpaceState } from '../../features/space/space.functions';
import { selectProgram, setAmenityData, setAmenityTotalArea } from '../../features/space/space.slice';
import { ROUTES } from '../../constants/routes';
import { GenericSpacePage } from '../../features/space/space.generic';
import { CollapsibleDataEntrySection } from '../../components/display/display.entry';
import SpaceTable from '../../components/table/table.component';

export default function SpaceConfirmationPage() {
  const program = useSelector(selectProgram);
  const hasPrevState = program.AmenityState.length > 0;

  const hydratedState = hydrateSpaceState<AmenitySpace>(program.AmenityState);

  return (
    <>
      <CollapsibleDataEntrySection 
        title='Space One'
        data={
          <div>
            <h1>Some Data!</h1>
          </div>
        }
      />
      <CollapsibleDataEntrySection 
        title='Space Two'
        data={
          <div>
            <h1>Some Other Data!</h1>
          </div>
        }
      />
      <CollapsibleDataEntrySection 
        title='Space Three'
        data={
          <div>
            <h1>Even More Data!</h1>
          </div>
        }
      />
    </>
  )
}