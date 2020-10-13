import React from 'react';
import styles from './page.module.scss';
import { ROUTES } from '../../constants/routes'
import { BackButton, DirectionalButton } from '../buttons/navigation';

export function PageNavigation({nextRoute}: INavigation ) {
  return (
    <div className={styles.page__navigation}>
      <BackButton />
      <DirectionalButton location={ nextRoute } content="Next" />
    </div>
  )
}

export interface INavigation {
  nextRoute: string
}