import React from 'react';
import { convertDataToINamedValues } from '../NamedValue';
import { INamedPanelSection, PanelSection } from './panel.section';

export function GeneralInfoPanelSection({ handleClick, isActive, rawData}: INamedPanelSection ) {
  const data = {
    "Units": '',
    "Tenancy": '',
  }

  data.Units = rawData.units;
  data.Tenancy = rawData.tenancy;

  const basicData = convertDataToINamedValues(data);

  return (
    <PanelSection
      title="General Information"
      handleClick={handleClick}
      isActive={isActive}
      sectionData={basicData}
    />
  )
}