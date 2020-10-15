/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { List } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectProgram } from '../../features/program/program.slice';
import { convertDataToINamedValues } from '../NamedValue';
import { PanelSection } from './panel.section';
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

  const generalData = convertDataToINamedValues(overview.general);
  const basicData = convertDataToINamedValues(overview.basic);
  const totalsData = convertDataToINamedValues(overview.totals);

  return (
    <Panel title={title}>
      <List>
        <PanelSection
          title="General Information"
          handleClick={handleGeneral}
          isActive={generalOpen}
          sectionData={generalData}
        />
        <PanelSection
          title="Basic Building Information"
          handleClick={handleBasic}
          isActive={basicOpen}
          sectionData={basicData}
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
