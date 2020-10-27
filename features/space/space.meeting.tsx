import React from 'react';
import { Page } from '../../components/pages/page';
import { ROUTES } from '../../constants/routes';
import SpaceData from '../../components/display/display.table';
import { WorkspaceDataEntrySection } from './space.entry';

export function MeetingWorkspaces() {
  return (
    <Page nextRoute={ ROUTES.PROGRAM.MEETING_UPDATE }>
      <WorkspaceDataEntrySection title="Meeting Spaces" data={<SpaceData />} />
    </Page>
  )
}
