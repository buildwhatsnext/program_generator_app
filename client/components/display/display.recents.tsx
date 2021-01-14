import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './display.project.module.scss';
import { loadProjects, selectSession } from '../../features/session/session.slice';
import { IProject } from '../../../shared/types/Project';
import { LoadingState } from '../../../shared/types/LoadingStates';
import { DispatchableText } from '../text/text.dispatchable';
import { loadProject } from '../../features/project/project.functions';
import { ROUTES } from '../../../shared/constants/routes';
import LoadingSection from './display.loader';
import { DFxRoutingButton } from '../buttons/navigation';

const RecentProject = (project: IProject) => {
  const {id, client, dateModified} = project;
  const name = client ?? '';

  return (
    <div className="project__recent">
      <h3>{ name }</h3>
      <div className={styles.project__buttons}>
        <ButtonEditInformation {...project} />
        <ButtonEditProgram {...project} />
      </div>
    </div>
  );
}

const ButtonEditInformation = (project: IProject) => {
  return (
    <DFxRoutingButton 
      content='Edit Building Info'
      location={ ROUTES.INFO.GENERAL}
      execute={ loadProject }
      executableData={{...project}}
    />
  )
}

const ButtonEditProgram = (project: IProject) => {
  return (
    <DFxRoutingButton 
      content='Edit Program'
      location={ ROUTES.PROJECT.BREAKDOWN}
      execute={ loadProject }
      executableData={{...project}}
    />
  )
}

const RecentProjectList = (projects?: IProject[]) => {
  if(!projects)
    return null;

  const recent = projects.map((p: IProject) => {
    const name = p.client ?? '';

    return (
      <RecentProject {...p} />
      // <DispatchableText 
      //   key={p.id} 
      //   name={name} 
      //   value={p.dateModified} 
      //   className={styles.recent__item}
      //   executableData={p}
      //   execute={loadProject}
      //   location={ROUTES.TRANSITION.PROJECT}
      // />
    );
  });

  return recent;
}

function displayRecentProjects(projects?: Array<IProject>) {

  const content = projects?.length > 0 
    ? RecentProjectList(projects)
    : (
      <div className={styles.section__none}>
        <p>There are no recent projects available - make a new one!</p>
      </div>
    );

  return content;

}

export function ProjectSelection() {
  
  const dispatch = useDispatch();
  const { recentProjects, loading } = useSelector(selectSession);

  useEffect(() => {
    async function loadRecentProjects() {
      await dispatch(loadProjects())
    }
    loadRecentProjects()
  },[]);

  const recent = displayRecentProjects(recentProjects);

  return (
    <div className={styles.section}>
      <div className={styles.section__title}>
        <h2>Recent Projects</h2>
      </div>
      <div className={styles.section__content}>
        { 
          loading === LoadingState.Loading
            ? <LoadingSection />
            : recent
        }
      </div>
    </div>
  );
}