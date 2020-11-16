import React, { useState } from 'react';
import { List } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectOverview } from '../../features/project/project.slice';
import { GeneralInfoPanelSection as GenSection } from '../panelsections/section.general';
import { BasicInfoPanelSection as BasicSection, } from '../panelsections/section.basic';
import { ProgramInfoPanelSection as ProgramSection } from '../panelsections/section.program';
import { Panel } from './panel';
import { selectBuilding } from '../../features/building/building.slice';

interface props {
  openGeneralSection?: boolean;
  openBasicSection?: boolean;
  openTotalsSection?: boolean;
}

export function BuildingInformationPanel({openBasicSection, openGeneralSection, openTotalsSection}: props) {
  const title = 'Building Information';
  const overview = useSelector(selectOverview);
  const building = useSelector(selectBuilding);
  const [isGeneralOpen, setGeneralOpenStatus] = useState(openGeneralSection && openGeneralSection !== undefined);
  const [isBasicOpen, setBasicOpenStatus] = useState(openBasicSection && openBasicSection !== undefined);
  const [isTotalsOpen, setTotalsOpenStatus] = useState(openTotalsSection && openTotalsSection !== undefined);

  const handleGeneral = () => {
    setGeneralOpenStatus(!isGeneralOpen);
  };
  const handleBasic = () => {
    setBasicOpenStatus(!isBasicOpen);
  };
  const handleTotals = () => {
    setTotalsOpenStatus(!isTotalsOpen);
  };

  return (
    <Panel title={title}>
      <List>
        <GenSection
          handleClick={handleGeneral}
          isActive={isGeneralOpen}
          rawData={overview}
        />
        <BasicSection
          handleClick={handleBasic}
          isActive={isBasicOpen}
          rawData={building}
        />
        <ProgramSection
          handleClick={handleTotals}
          isActive={isTotalsOpen}
          rawData={building}
        />
      </List>
    </Panel>
  );
}
