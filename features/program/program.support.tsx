import React from 'react';
import { Page } from '../../components/pages/page';
import { ROUTES } from '../../constants/routes';
import SpaceData from '../../components/display/display.table';
import { WorkspaceDataEntrySection } from './program.data';

export function SupportSpaces() {
  return (
    <Page nextRoute={ ROUTES.PROGRAM.SUPPORT_UPDATE }>
      <WorkspaceDataEntrySection title="Support Spaces" data={<SpaceData />} />
    </Page>
  )
}
