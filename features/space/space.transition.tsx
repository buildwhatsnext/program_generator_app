import React from 'react';
import { TransitionPage } from '../../components/transition/page';
import { TransitionSection, ISection } from '../../components/transition/section';
import { BuildingInformationPanel } from '../../components/panels/panel.building';
import { ProgrammedSpaceDisplay } from '../../components/display/display.pie';
import styles from './space.module.scss';

export function ProgramTransition({desc, fwdBtnText, to}: ISection) {
  const nav = (
    <TransitionSection
      desc={desc}
      fwdBtnText={fwdBtnText}
      to={to}
      classSectionOverall={styles.program__section}
      classSectionDescription={styles.program__section__desc}
    />
  );

  return (
    <TransitionPage 
      panel={<BuildingInformationPanel /> } 
      nav={nav}
      extraNavClasses={styles.program__nav}
    >
      <ProgrammedSpaceDisplay />
    </TransitionPage>
  );
}
