import React from 'react';
import styles from './panel.project.module.scss';
import buttonStyles from '../buttons/navigation.module.scss';
import { Panel } from './panel';
import { createNewProject, openProject } from '../../features/project/project.slice';
import { FxRoutingButton } from '../buttons/navigation';
import { ROUTES } from '../../constants/routes';

export const ProjectOpenPanel = (): JSX.Element => (
  <Panel>
    <OpenOptions />
  </Panel>
);

function OpenOptions() {
  const projectDetails = {
    id: 94615,
    name: 'The Project name',
    dateModified: Date.now(),
  };

  return (
    <div className={styles.open__options}>
      <FxRoutingButton
        content="Create New"
        to={ROUTES.TRANSITION.PROJECT}
        execute={createNewProject}
        customButtonStyle={buttonStyles.button__panel}
      />
      <FxRoutingButton
        content="Open Project"
        to={ROUTES.TRANSITION.PROJECT}
        execute={openProject}
        executableData={projectDetails}
        customButtonStyle={buttonStyles.button__panel}
      />
    </div>
  );
}
