import React, { ReactNode } from 'react';
import styles from './page.module.scss';
import { Panel } from './panel';
import { ProgramHeader } from './header';

interface IPage {
  children?: ReactNode;
  panel?: boolean;
}

export function Page({children, panel} : IPage) {
  return !panel 
    ? <div className={styles.page}>
        <ProgramHeader />
        {children}
      </div>
    : <div className={styles.page__panel}>
      <Panel />
      <div className="page__content">
        <ProgramHeader />
        {children}
      </div>
    </div>
}
