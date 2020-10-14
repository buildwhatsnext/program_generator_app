import React from 'react';
import { Page } from '../../components/pages/page';
import { ROUTES } from '../../constants/routes';
import SpaceData from '../../components/display/display.table';

export function EnclosedWorkspaces() {
  return (
    <Page nextRoute={ ROUTES.PROGRAM.UPDATE }>
      <WorkspaceDataEntrySection title="Enclosed Offices" data={<SpaceData />} />
    </Page>
  )
}

export function WorkspaceDataEntrySection({title, data}) {
  return (
    <DataEntrySection title={title} data={data}/>
  )
}

export function DataEntrySection({title, data = null}) {
  return (
    <div className="section">
      <div className="section__title">{title}</div>
      <div className="section__content">
        { data }
      </div>
    </div>
  )
}
