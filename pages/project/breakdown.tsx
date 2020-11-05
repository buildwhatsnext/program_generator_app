import React from 'react';
import { useSelector } from 'react-redux';
import { ROUTES } from '../../constants/routes';
import { SPACE_STANDARDS } from '../../constants/ark.standards';
import { selectOverview } from '../../features/info/info.slice';
import { SpaceDataSection } from '../../features/space/space.section';
import { Page } from '../../components/pages/page';
import { BuildingInformationPanel } from '../../components/panels/panel.building';

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
    />
  )
}