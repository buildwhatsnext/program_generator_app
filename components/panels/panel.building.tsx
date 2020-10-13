/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { List } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectProject } from '../../features/project/project.slice';
import { convertDataToINamedValues } from '../NamedValue';
import { PanelSection } from './panel.section';
import { Panel } from './panel';

export function BuildingInformationPanel() {
  const title = 'Building Information';
  const { overview } = useSelector(selectProject);
  const [generalOpen, setGeneralOpenStatus] = useState(false);
  const [formOpen, setFormOpenStatus] = useState(false);
  const [totalsOpen, setTotalsOpenStatus] = useState(false);

  const handleGeneral = () => {
    setGeneralOpenStatus(!generalOpen);
  };
  const handleForm = () => {
    setFormOpenStatus(!formOpen);
  };
  const handleTotals = () => {
    setTotalsOpenStatus(!totalsOpen);
  };

  const generalData = convertDataToINamedValues(overview.general);
  const formData = convertDataToINamedValues(overview.form);
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
          handleClick={handleForm}
          isActive={formOpen}
          sectionData={formData}
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
