import React from 'react';
import styles from './page.module.scss';
import { ROUTES } from '../../../shared/constants/routes'
import { BackButton, FxRoutingButton } from '../buttons/navigation';

export interface INavigation {
  nextRoute: string
  navFx?: () => void;
}

export function PageNavigation({nextRoute, navFx}: INavigation ) {
  return (
    <>
      <div className={styles.page__nav__back}><BackButton /></div>
      <div className={styles.page__nav__next}>
        <FxRoutingButton 
          location={ nextRoute } 
          content="Next" 
          handleClick={navFx}
        />
      </div>
    </>
  )
}


