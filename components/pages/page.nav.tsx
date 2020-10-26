import React from 'react';
import styles from './page.module.scss';
import { ROUTES } from '../../constants/routes'
import { BackButton, FxRoutingButton } from '../buttons/navigation';

export function PageNavigation({nextRoute}: INavigation ) {
  return (
    <>
      <div className={styles.page__nav__back}><BackButton /></div>
      <div className={styles.page__nav__next}><FxRoutingButton location={ nextRoute } content="Next" /></div>
    </>
  )
}

export interface INavigation {
  nextRoute: string
}
