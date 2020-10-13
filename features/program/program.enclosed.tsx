import React from 'react';
import { Page } from '../../components/pages/page';
import { ROUTES } from '../../constants/routes';
import SpaceData from '../../components/display/display.table';

export function EnclosedWorkspaces() {
  return (
    <Page nextRoute={ ROUTES.PROGRAM.UPDATE }>
      <WorkspaceDataEntrySection />
    </Page>
  )
}

export function WorkspaceDataEntrySection() {
  return (
    <DataEntrySection title="Enclosed Offices" />
  )
}

export function DataEntrySection({title, content = null}) {
  
  return (
    <div className="section">
      <div className="section__title">{title}</div>
      {/* <div className="section__content">{content}</div> */}
      <div className="section__content">
        <SpaceData />
      </div>
    </div>
  )
}
