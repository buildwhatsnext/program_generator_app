/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { List } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectInfo } from '../../features/info/info.slice';
import { 
  GeneralInfoPanelSection, 
  BasicInfoPanelSection as BasicSection, 
  ProgramInfoPanelSection as ProgramSection
} from './panel.section';
import { Panel } from './panel';

export function BuildingInformationPanel() {
  const title = 'Building Information';
  const overview = useSelector(selectInfo);
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
        <GeneralInfoPanelSection
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
