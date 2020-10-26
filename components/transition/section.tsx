import React from 'react';
import { FxRoutingButton, BackButton } from '../buttons/navigation';
import styles from './section.module.scss';

export interface ISection {
  desc: string;
  fwdBtnText?: string;
  to: string;
  classSectionOverall?: string;
  classSectionDescription?: string;
  classSectionNav?: string;
};

export function TransitionSection({
  desc,
  fwdBtnText = "Next",
  to,
  classSectionOverall,
  classSectionDescription,
  classSectionNav
}: ISection) {
  return (
    <div className={`${styles.section} ${classSectionOverall}`}>
      <p className={`${styles.section__desc} ${classSectionDescription}`}>{desc}</p>
      <div className={`${styles.section__nav} ${classSectionNav}`}>
        <div className={styles.section__nav__back}>
          <BackButton />
        </div>
        <div className={styles.section__nav__next}>
          <FxRoutingButton location={to} content={fwdBtnText} />
        </div>
      </div>
    </div>
  );
}
