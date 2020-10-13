import React from 'react';
import { ProgramHeader } from '../../components/header';
import { TransitionPage } from '../../components/transition/page';
import { TransitionSection } from '../../components/transition/section';
import { BuildingInformationPanel } from '../../components/panels/panel.building';
import { ProgrammedSpaceDisplay } from '../../components/display/display.pie';

export function ProgramTransition(desc:string, fwdBtnText: string, nextPage: string ) {
  // const desc = `Let's take a look at the open plan workspace requirements`;
  // const forward = `Start Open Plan`;
  // const nextPage = '/project/workspace';

  return (
    <TransitionPage panel={<BuildingInformationPanel />}>
      <div className="page__header">
        <ProgramHeader />
      </div>
      <div className="page__info">
        <ProgrammedSpaceDisplay />
      </div>
      <div className="page__nav">
        <TransitionSection
          desc={desc}
          fwdBtnText={fwdBtnText}
          to={nextPage}
        />
      </div>
    </TransitionPage>
  );
}
