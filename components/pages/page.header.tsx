import React from 'react';
import { useSelector } from 'react-redux';
import { selectProject } from '../../features/project/project.slice';
import { selectSetting } from '../../features/settings/settings.slice';
import styles from './page.module.scss';

export function ProgramHeader() {
  const { client } = useSelector(selectProject);
  const { application, company } = useSelector(selectSetting);

  return (
    <div className={styles.header}>
      <p className={styles.header__company}>{company}</p>
      <p className={styles.header__program}>{application}</p>
      <p className={styles.header__client}>{client}</p>
    </div>
  );
}

// interface IHeader {
//   companyName: string;
//   program: string;
//   clientName: string;
// };
