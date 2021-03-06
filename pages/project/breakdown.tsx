import React from 'react';
import { useSelector } from 'react-redux';
import { ROUTES } from '../../shared/constants/routes';
import { SPACE_STANDARDS } from '../../shared/constants/ark.standards';
import { selectOverview } from '../../client/features/project/project.slice';
import { SpaceDataSection } from '../../client/features/space/space.section';
import { Page } from '../../client/components/pages/page';
import { BuildingInformationPanel } from '../../client/components/panels/panel.building';
import { ProgrammedSpaceDisplay, RatioSpaceDisplay } from '../../client/components/display/display.pie';
import styles from './breakdown.module.scss';

export default function ProjectBreakdown() {
  const { hasLab, hasBroadcast } = useSelector(selectOverview);
  const standards = { ...SPACE_STANDARDS };
  if(!hasLab)
    delete standards.LAB;

  if (!hasBroadcast)
    delete standards.BROADCAST;

  const types = Object.values(standards).filter(standard => standard.type)

  const sections = types.map((type, index) => {
    return (
      <div key={`${index}_${type.name}`} style={{marginBottom: '1rem'}}>
        <SpaceDataSection 
          readonly
          collapsible
          startHidden={index > 0}
          title={type.sectionTitle}
          type={type.type}
          stateName={type.stateName}
          storeHandler={type.storeHandler}
          areaHandler={type.areaHandler}
        />
      </div>
    )
  })

  return (
    <Page 
      panel={
        <BuildingInformationPanel 
          openBasicSection
          openGeneralSection
          openTotalsSection
        />
      }
    >
      <div className="breakdown">
        <div className={styles.breakdown__pie}>
          <ProgrammedSpaceDisplay />
          <RatioSpaceDisplay />
        </div>
        <div className={styles.breakdown__data}>
          { sections }
        </div>
      </div>
    </Page>
  )
}