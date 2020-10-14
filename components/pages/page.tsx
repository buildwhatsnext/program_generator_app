import React, { ReactNode } from 'react';
import styles from './page.module.scss';
import { Panel } from '../panels/panel';
import { ProgramHeader } from './page.header';
import { PageNavigation } from './page.nav';
import { ROUTES } from '../../constants/routes';

export interface IPage {
  children?: ReactNode;
  showPanel?: boolean;
  panel?: JSX.Element;
  nextRoute?: string;
}

export function Page({children, showPanel, panel, nextRoute }: IPage) {
  return !showPanel && !panel
    ? <div className={styles.page}>
        <div className="page__header">
          <ProgramHeader />
        </div>
        <div className="page__content">
          {children}
        </div>
        <div className={styles.page__nav}>
          { 
            nextRoute
              ? <PageNavigation nextRoute={nextRoute ?? ROUTES.ERROR } />
              : null
          }
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
