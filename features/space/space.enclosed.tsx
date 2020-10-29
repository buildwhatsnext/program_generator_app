import React from 'react';
import { Page } from '../../components/pages/page';
import { ROUTES } from '../../constants/routes';
import SpaceData from '../../components/table/table.component';
import { WorkspaceDataEntrySection } from './space.entry';
import { EnclosedOfficeSpace } from '../../components/spaces/Space';

export function EnclosedWorkspaces() {
  return (
    <Page nextRoute={ ROUTES.SPACE.ENCLOSED_UPDATE }>
      <WorkspaceDataEntrySection 
        title="Enclosed Offices" 
        data={
          <SpaceData type={EnclosedOfficeSpace} />
        } 
      />
    </Page>
  )
}
