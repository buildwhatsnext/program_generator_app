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

    return <RecentProjectItem key={p.id} name={name} date={p.dateModified} />;
  });

  return recent;
}

export function ProjectSelection() {
  const { projects } = useSelector(selectSetting);

  const recent = displayRecentProjects(projects.recent);

  return (
    <div className={styles.project}>
      <div className={styles.project__display}>
        <h4>Recent Projects</h4>
        <div className={styles.project__display__options}>
          {recent}
          <div className={styles.circle}/>
        </div>
      </div>
    </div>
  );
}

type ProjectItemProps = {
  name: string;
  date: string;
};

const RecentProjectItem = (props: ProjectItemProps) => {
  const { name, date } = props;

  return <NamedValue name={name} value={date} />;
};
