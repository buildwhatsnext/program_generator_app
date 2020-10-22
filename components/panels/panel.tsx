import React from 'react';
import styles from './panel.module.scss';

export interface IPanel {
  title?: string;
  children?: React.ReactNode;
}

export function Panel({title = 'Program Dashboard', children }: IPanel) {
  return (
    <div className={styles.panel}>
      <div className={styles.panel__title}>
        <h1>{title}</h1> 
      </div>
      <div className={styles.panel__content}>
        {children}
      </div>
    </div>
  )
}
