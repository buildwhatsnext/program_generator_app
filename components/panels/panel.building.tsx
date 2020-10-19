/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { List } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectProgram } from '../../features/program/program.slice';
import { convertDataToINamedValues } from '../NamedValue';
import { PanelSection, GeneralInfoPanelSection, BasicInfoPanelSection as BasicSection } from './panel.section';
import { Panel } from './panel';

export function BuildingInformationPanel() {
  const title = 'Building Information';
  const { overview } = useSelector(selectProgram);
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

  // const generalData = convertDataToINamedValues(overview.general);
  // const basicData = convertDataToINamedValues(overview.basic);
  const totalsData = convertDataToINamedValues(overview.totals);

  return (
    <Panel title={title}>
      <List>
        <GeneralInfoPanelSection
          title="General Information"
          handleClick={handleGeneral}
          isActive={generalOpen}
          rawData={overview.general}
        />
        <BasicSection
          title="Basic Building Information"
          handleClick={handleBasic}
          isActive={basicOpen}
          rawData={overview.basic}
        />
        <PanelSection
          title="Programmed Space"
          handleClick={handleTotals}
          isActive={totalsOpen}
          sectionData={totalsData}
        />
      </List>
    </Panel>
  );
}
