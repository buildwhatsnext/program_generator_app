import React from 'react';
import { Page } from '../../components/pages/page';
import { ROUTES } from '../../constants/routes';
import SpaceData from '../../components/display/display.table';
import { WorkspaceDataEntrySection } from './space.entry';

export function OpenPlanWorkspaces() {
  return (
    <Page nextRoute={ ROUTES.PROGRAM.OPEN_PLAN_UPDATE }>
      <WorkspaceDataEntrySection title="Open Offices" data={<SpaceData />} />
    </Page>
  )
}
