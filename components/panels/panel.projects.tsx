import React from 'react';
import styles from './panel.project.module.scss';
import { Panel } from './panel';
import { createNewProject, openProject } from '../../features/project/project.slice';
import { InternalNavigationalButton } from '../buttons/navigation';
import { ROUTES } from '../../constants/routes';

export const ProjectOpenPanel = () => (
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
    <div className="open__options">
      <InternalNavigationalButton
        className={styles.button__project}
        content="Create New"
        to={ROUTES.TRANSITION.PROJECT}
        execute={createNewProject}
      />
      <InternalNavigationalButton
        className={styles.button__project}
        content="Open Project"
        to={ROUTES.TRANSITION.PROJECT}
        execute={openProject}
        executableData={projectDetails}
      />
    </div>
  );
}