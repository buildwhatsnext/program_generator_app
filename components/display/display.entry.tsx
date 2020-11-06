import React from 'react';
import styles from './display.entry.module.scss';

interface props {
  title: string;
  data?: any;
  collapsible?: boolean;
  startHidden?: boolean;
}

export function DataEntrySection({title, collapsible, startHidden, data = null}: props) {
  const collapsed = startHidden && startHidden !== undefined;
  const [isHidden, setHidden] = React.useState(collapsed);

  const toggleHidden = () => {
    setHidden(!isHidden);
  }

  const status = isHidden ? '+' : '-'
  const toggle = 
    !collapsible 
      ? null 
      : (
        <span onClick={() => toggleHidden()} role="button" className={styles.section__title__toggle}>
          <h2> {status} </h2>
        </span>
      )

  return (
    <div className={styles.section}>
      <div className={styles.section__title}>
        { toggle }
        <h2>{title}</h2>
      </div>
      <div className={ isHidden ? styles.section__content__none : styles.section__content }>
        { data }
      </div>
    </div>
  )
}
