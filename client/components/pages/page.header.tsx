import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from '../../features/project/node_modules/react-redux';
import { selectOverview } from '../../features/project/info.slice';
import { selectSession } from '../../features/session/session.slice';
import styles from './page.module.scss';
import { ROUTES } from '../../../shared/constants/routes';

export function ProgramHeader() {
  const router = useRouter();
  const { client } = useSelector(selectOverview);
  const { application, company } = useSelector(selectSession);

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
