import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import styles from './project.module.scss';
import { openProject } from './project.slice';
import { NamedValue } from '../../components/NamedValue';
import { selectSetting } from '../settings/settings.slice';
import { IProject } from './project.type';

const RecentProjects = (projects?: IProject[]) => {

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
    ? RecentProjects(projects)
    : (
      <div className={styles.section__none}>
        <p>There are no recent projects available - make a new one!</p>
      </div>
    );

  return content;

}

export function ProjectSelection() {
  const { projects } = useSelector(selectSetting);

  const recent = displayRecentProjects(projects.recent);
  // const recent = displayRecentProjects();

  return (
    <div className={styles.section}>
      <div className={styles.section__title}>
        <h2>Recent Projects</h2>
      </div>
      <div className={styles.section__content}>
        {recent}
      </div>
    </div>
  );
}