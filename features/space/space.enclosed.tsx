import React from 'react';
import { Page } from '../../components/pages/page';
import { ROUTES } from '../../constants/routes';
import SpaceData from '../../components/display/display.table';
import { WorkspaceDataEntrySection } from './space.entry';

export function EnclosedWorkspaces() {
  return (
    <Page nextRoute={ ROUTES.SPACE.ENCLOSED_UPDATE }>
      <WorkspaceDataEntrySection title="Enclosed Offices" data={<SpaceData />} />
    </Page>
  )
}
