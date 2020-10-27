import React from 'react';
import { Page } from '../../components/pages/page';
import { ROUTES } from '../../constants/routes';
import SpaceData from '../../components/display/display.table';
import { WorkspaceDataEntrySection } from './space.entry';

export function LabSpaces() {
  return (
    <Page nextRoute={ ROUTES.SPACE.LAB_UPDATE }>
      <WorkspaceDataEntrySection title="Lab Spaces" data={<SpaceData />} />
    </Page>
  )
}
