import React, { ReactNode } from 'react';
import styles from './page.module.scss';
import { Panel } from './panel';

interface IPage {
  children?: ReactNode;
  panel?: boolean;
}

export function Page({children, panel} : IPage) {
  return !panel 
    ? <div className={styles.page}>{children}</div>
    : <div className={styles.page__panel}>
      <Panel />
      {children}
    </div>
}
