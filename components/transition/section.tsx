import React from 'react';
import { DirectionalButton, BackButton } from '../buttons/navigation';
import styles from './section.module.scss';

export interface ISection {
  desc: string;
  fwdBtnText?: string;
  to: string;
};

export function TransitionSection({
  desc,
  fwdBtnText = "Next",
  to,
}: ISection) {
  return (
    <div className={styles.section}>
      <p className={styles.section__desc}>{desc}</p>
      <div className={styles.section__nav}>
        <div className={styles.section__nav__back}>
          <BackButton />
        </div>
        <div className={styles.section__nav__next}>
          <DirectionalButton location={to} content={fwdBtnText} />
        </div>
      </div>
    </div>
  );
}
