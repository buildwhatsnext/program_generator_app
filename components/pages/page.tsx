import React, { ReactNode } from 'react';
import styles from './page.module.scss';
import { Panel } from '../panels/panel';
import { ProgramHeader } from './page.header';

export interface IPage {
  children?: ReactNode;
  showPanel?: boolean;
  panel?: JSX.Element;
}

export function Page({children, showPanel, panel } : IPage) {
  return !showPanel && !panel
    ? <div className={styles.page}>
        <div className="page__header">
          <ProgramHeader />
        </div>
        <div className="page__content">
          {children}
        </div>
        <div className="page__nav">
          
        </div>
      </div>
    : <div className={styles.page__panel}>
        <div className="page__panel">
          { panel ?? <Panel /> }
        </div>
        <div className="page__content">
          <ProgramHeader />
          {children}
      </div>
    </div>
}
