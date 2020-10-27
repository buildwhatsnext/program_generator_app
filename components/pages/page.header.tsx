import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectOverview } from '../../features/info/info.slice';
import { selectSetting } from '../../features/settings/settings.slice';
import styles from './page.module.scss';
import { ROUTES } from '../../constants/routes';

export function ProgramHeader() {
  const router = useRouter();
  const { client } = useSelector(selectOverview);
  const { application, company } = useSelector(selectSetting);

  const handleClick = () => {
    router.push(ROUTES.HOME);
  }

  return (
    <div className={styles.header}>
      <h2 className={styles.header__company} onClick={handleClick} onKeyDown={handleClick}>{company}</h2>
      <h3 className={styles.header__program}>{application}</h3>
      <h4 className={styles.header__client}>{client}</h4>
    </div>
  );
}

// interface IHeader {
//   companyName: string;
//   program: string;
//   clientName: string;
// };
