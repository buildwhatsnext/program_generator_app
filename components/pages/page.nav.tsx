import React from 'react';
import styles from './page.module.scss';
import { ROUTES } from '../../constants/routes'
import { BackButton, DirectionalButton } from '../buttons/navigation';

export function PageNavigation({nextRoute}: INavigation ) {
  return (
    <div className={styles.nav}>
      <div className={styles.navBack}><BackButton /></div>
      <div className={styles.navNext}><DirectionalButton location={ nextRoute } content="Next" /></div>
    </div>
  )
}

export interface INavigation {
  nextRoute: string
}