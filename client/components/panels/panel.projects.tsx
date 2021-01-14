import React from 'react';
import styles from './panel.project.module.scss';
import buttonStyles from '../buttons/navigation.module.scss';
import { Panel } from './panel';
import { createProject } from '../../features/project/project.functions';
import { DFxRoutingButton } from '../buttons/navigation';
import { ROUTES } from '../../../shared/constants/routes';

export const ProjectOpenPanel = (): JSX.Element => (
  <Panel>
    <OpenOptions />
  </Panel>
);

function OpenOptions() {
  return (
    <div className={styles.open__options}>
      <DFxRoutingButton
        content="Create New"
        location={ROUTES.TRANSITION.PROJECT}
        execute={createProject}
        customButtonStyle={buttonStyles.button__panel}
      />
    </div>
  );
}
