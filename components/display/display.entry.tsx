import React from 'react';
import styles from './display.entry.module.scss';

export function DataEntrySection({title, data = null}) {
  return (
    <div className={styles.section}>
      <div className="section__title">
        <h2>
          {title}
        </h2>
      </div>
      <div className={styles.section__content}>
        { data }
      </div>
    </div>
  )
}