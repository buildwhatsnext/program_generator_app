import React from 'react';
import { useSelector } from 'react-redux';
import { AmenitySpace, EnclosedOfficeSpace } from '../../components/spaces/Space';
import { hydrateSpaceState } from '../../features/space/space.functions';
import { selectProgram, setAmenityData, setAmenityTotalArea } from '../../features/space/space.slice';
import { ROUTES } from '../../constants/routes';
import { GenericSpacePage } from '../../features/space/space.generic';
import SpaceTable from '../../components/table/table.component';
import { SPACE_STANDARDS, SPACE_STATE_NAMES } from '../../constants/ark.standards';
import { selectOverview } from '../../features/info/info.slice';
import { SpaceDataSection } from '../../features/space/space.section';
import { Page } from '../../components/pages/page';

export default function SpaceConfirmationPage() {
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
    <Page nextRoute={ROUTES.SPACE.WRAP} >
      { sections }
    </Page>
  )
}