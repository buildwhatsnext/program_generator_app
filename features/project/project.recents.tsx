import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import styles from './project.module.scss';
import { openProject } from './project.slice';
import { NamedValue } from '../../components/NamedValue';
import { selectSetting } from '../settings/settings.slice';
import { IProject } from './project.type';

function displayRecentProjects(projects: Array<IProject>) {
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

export function ProjectSelection() {
  const { projects } = useSelector(selectSetting);

  const recent = displayRecentProjects(projects.recent);

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
