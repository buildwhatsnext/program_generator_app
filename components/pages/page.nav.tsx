import React from 'react';
import styles from './page.module.scss';
import { ROUTES } from '../../constants/routes'
import { BackButton, RoutingButton } from '../buttons/navigation';

export function PageNavigation({nextRoute}: INavigation ) {
  return (
    <>
      <div className={styles.page__nav__back}><BackButton /></div>
      <div className={styles.page__nav__next}><RoutingButton location={ nextRoute } content="Next" /></div>
    </>
  )
}

export interface INavigation {
  nextRoute: string
}
