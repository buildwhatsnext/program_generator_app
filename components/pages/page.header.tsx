import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectProject } from '../../features/project/project.slice';
import { selectSetting } from '../../features/settings/settings.slice';
import styles from './page.module.scss';
import { ROUTES } from '../../constants/routes';

export function ProgramHeader() {
  const router = useRouter();
  const { client } = useSelector(selectProject);
  const { application, company } = useSelector(selectSetting);

  const handleClick = () => {
    router.push(ROUTES.HOME);
  }

  return (
    <div className={styles.header}>
      <p className={styles.header__company} onClick={handleClick} onKeyDown={handleClick}>{company}</p>
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
