import React, { useState } from 'react';
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

  const [isHovered, setHover] = useState(false);

  const mouseOver = (event) => {
    event.target.style.background = '#06038D';
    event.target.style.color = 'white';
  }

  const mouseOut = (event) => {
    event.target.style.background = 'white';
    event.target.style.color = '#06038D';
  }

  return (
    <div className={styles.project}>
      <div className={styles.project__display}>
        <h4>Recent Projects</h4>
        <div className={styles.project__display__options} onMouseOver={mouseOver} onMouseOut={mouseOut}>{recent}</div>
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
