import React from 'react';
import { Page } from '../../components/pages/page';
import { ROUTES } from '../../constants/routes';
import SpaceData from '../../components/display/display.table';
import { WorkspaceDataEntrySection } from './space.entry';

export function BroadcastSpaces() {
  return (
    <Page nextRoute={ ROUTES.PROGRAM.BROADCAST_UPDATE }>
      <WorkspaceDataEntrySection title="Broadcast Spaces" data={<SpaceData />} />
    </Page>
  )
}
