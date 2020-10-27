import React from 'react';
import { Page } from '../../components/pages/page';
import { ROUTES } from '../../constants/routes';
import SpaceData from '../../components/display/display.table';
import { WorkspaceDataEntrySection } from './space.entry';

export function AmenitySpaces() {
  return (
    <Page nextRoute={ ROUTES.SPACE.AMENITY_UPDATE }>
      <WorkspaceDataEntrySection title="Amenity Spaces" data={<SpaceData />} />
    </Page>
  )
}
