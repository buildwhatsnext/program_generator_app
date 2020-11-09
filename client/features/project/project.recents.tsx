import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './project.module.scss';
import { openProject } from './project.slice';
import { NamedValue } from '../../components/NamedValue';
import { loadProjects, selectSession } from '../settings/session.slice';
import { IProject } from '../../../shared/types/Project';
import { LoadingState } from '../../../shared/types/LoadingStates';

const RecentProjectList = (projects?: IProject[]) => {
  if(!projects)
    return null;

  const recent = projects.map((p: IProject) => {
    const name = p.name ?? '';

    return (
      <NamedValue 
        key={p.id} 
        name={name} 
        value={p.dateModified} 
        className={styles.recent__item}
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
    console.log('Checking for recent projects');
    async function loadRecentProjects() {
      await dispatch(loadProjects())
    }
    loadRecentProjects()
  },[])

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