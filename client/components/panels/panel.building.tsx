import React, { useState } from 'react';
import { List } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectOverview } from '../../features/project/project.slice';
import { GeneralInfoPanelSection as GenSection } from '../panelsections/section.general';
import { BasicInfoPanelSection as BasicSection, } from '../panelsections/section.basic';
import { ProgramInfoPanelSection as ProgramSection } from '../panelsections/section.program';
import { Panel } from './panel';

export function BuildingInformationPanel() {
  const title = 'Building Information';
  const overview = useSelector(selectOverview);
  const [generalOpen, setGeneralOpenStatus] = useState(false);
  const [basicOpen, setBasicOpenStatus] = useState(false);
  const [totalsOpen, setTotalsOpenStatus] = useState(false);

  const handleGeneral = () => {
    setGeneralOpenStatus(!generalOpen);
  };
  const handleBasic = () => {
    setBasicOpenStatus(!basicOpen);
  };
  const handleTotals = () => {
    setTotalsOpenStatus(!totalsOpen);
  };

  return (
    <Panel title={title}>
      <List>
        <GenSection
          handleClick={handleGeneral}
          isActive={generalOpen}
          rawData={overview}
        />
        <BasicSection
          handleClick={handleBasic}
          isActive={basicOpen}
          rawData={overview}
        />
        <ProgramSection
          handleClick={handleTotals}
          isActive={totalsOpen}
          rawData={overview}
        />
      </List>
    </Panel>
  );
}
