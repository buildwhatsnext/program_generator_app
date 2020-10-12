import React, { ReactNode } from 'react';
import styles from './page.styles.scss';
import {IPanel} from './panel';

interface IPage {
  children: ReactNode;
  panel?: IPanel;
}

export function Page({children, panel} : IPage) {
  return !panel 
    ? <div className={styles.page}>{children}</div>
    : <div className={styles.page}>
      {panel}
      {children}
    </div>
}
