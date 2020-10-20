import React, { ReactNode } from 'react';
import styles from './page.module.scss';
import { Panel } from '../panels/panel';
import { ProgramHeader } from './page.header';
import { INavigation, PageNavigation } from './page.nav';
import { ROUTES } from '../../constants/routes';

export interface IPage {
  children?: ReactNode;
  showPanel?: boolean;
  nav?: JSX.Element;
  panel?: JSX.Element;
  nextRoute?: string;
}

export function Page({children, showPanel, nav, panel, nextRoute }: IPage) {
  return (
    !showPanel && !panel
      ? <SimplePage nextRoute={nextRoute} nav={nav}>{children}</SimplePage>
      : <PanelPage showPanel={showPanel} panel={panel} nav={nav} nextRoute={nextRoute}>
        { children }
      </PanelPage>
    )
}

export function SimplePage({children, nav, nextRoute }: IPage) {
  return (
    <div className={styles.page}>
      <div className="page__header">
        <ProgramHeader />
      </div>
      <div className={styles.page__content}>
        {children}
      </div>
      <div className={styles.page__nav}>
        { 
          nav || (nextRoute
            ? <PageNavigation nextRoute={nextRoute ?? ROUTES.ERROR } />
            : null)
        }
      </div>
    </div>
  )
}

export function PanelPage({children, panel, nav, nextRoute }: IPage) {
  return (
    <div className={styles.page__panel}>
      { panel ?? <Panel /> }
      <SimplePage nextRoute={nextRoute} nav={nav}>{children}</SimplePage>
    </div>
  )
}
