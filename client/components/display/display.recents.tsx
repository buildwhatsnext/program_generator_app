import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './display.project.module.scss';
import { loadProjects, selectSession } from '../../features/session/session.slice';
import { IProject } from '../../../shared/types/Project';
import { LoadingState } from '../../../shared/types/LoadingStates';
import { DispatchableText } from '../text/text.dispatchable';
import { loadProject } from '../../features/project/project.slice';
import { ROUTES } from '../../../shared/constants/routes';

const RecentProjectList = (projects?: IProject[]) => {
  if(!projects)
    return null;

  const recent = projects.map((p: IProject) => {
    const name = p.client ?? '';
    const label = p.label ?? '-';

    return (
      <DispatchableText 
        key={p.id} 
        name={name} 
        label={label}
        value={p.dateModified} 
        className={styles.recent__item}
        executableData={p}
        execute={loadProject}
        location={ROUTES.TRANSITION.PROJECT}
      />
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
    loading === LoadingState.Loading
      ? <p>Loading...</p>
      : (
        <div className={styles.section}>
          <div className={styles.section__title}>
            <h2>Recent Projects</h2>
          </div>
          <div className={styles.section__content}>
            {recent}
          </div>
        </div>
      )
  );
}