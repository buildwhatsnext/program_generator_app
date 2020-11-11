import React from 'react';
import styles from './panel.project.module.scss';
import buttonStyles from '../buttons/navigation.module.scss';
import { Panel } from './panel';
import { createProject } from '../../features/settings/session.slice';
import { DFxRoutingButton } from '../buttons/navigation';
import { ROUTES } from '../../../shared/constants/routes';

export const ProjectOpenPanel = (): JSX.Element => (
  <Panel>
    <OpenOptions />
  </Panel>
);

function OpenOptions() {
  // const projectDetails = {
  //   id: 94615,
  //   name: 'The Project name',
  //   dateModified: Date.now(),
  // };

  return (
    <div className={styles.open__options}>
      <DFxRoutingButton
        content="Create New"
        location={ROUTES.TRANSITION.PROJECT}
        execute={createProject}
        customButtonStyle={buttonStyles.button__panel}
      />
      <DFxRoutingButton
        content="Open Project"
        location={ROUTES.TRANSITION.PROJECT}
        // execute={openProject}
        // executableData={projectDetails}
        customButtonStyle={buttonStyles.button__panel}
      />
    </div>
  );
}
