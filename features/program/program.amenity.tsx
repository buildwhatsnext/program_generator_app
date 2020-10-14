import React from 'react';
import { Page } from '../../components/pages/page';
import { ROUTES } from '../../constants/routes';
import SpaceData from '../../components/display/display.table';
import { WorkspaceDataEntrySection } from './program.data';

export function AmenitySpaces() {
  return (
    <Page nextRoute={ ROUTES.PROGRAM.AMENITY_UPDATE }>
      <WorkspaceDataEntrySection title="Amenity Spaces" data={<SpaceData />} />
    </Page>
  )
}
