import React from 'react';
import styles from './panel.module.scss';

export interface IPanel {
  title?: string;
  children?: React.ReactNode;
  backgroundColor?: string;
}

export function Panel({title = 'Program Dashboard', children }: IPanel) {

  return (
    <div className={styles.panel}>
      <div className={styles.panel__title}>{title}</div>
      <div className={styles.panel__content}>{children}</div>
    </div>
  )
}
