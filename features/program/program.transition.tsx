import React from 'react';
import { TransitionPage } from '../../components/transition/page';
import { TransitionSection, ISection } from '../../components/transition/section';
import { BuildingInformationPanel } from '../../components/panels/panel.building';
import { ProgrammedSpaceDisplay } from '../../components/display/display.pie';

export function ProgramTransition({desc, fwdBtnText, to}: ISection) {
  const nav = (
    <TransitionSection
      desc={desc}
      fwdBtnText={fwdBtnText}
      to={to}
    />
  );

  return (
    <TransitionPage panel={<BuildingInformationPanel />} nav={nav}>
      <ProgrammedSpaceDisplay />
    </TransitionPage>
  );
}
