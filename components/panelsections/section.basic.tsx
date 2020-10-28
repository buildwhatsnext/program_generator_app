import React from 'react';
import { convertDataToINamedValues } from '../NamedValue';
import { formatAreaData } from '../units/units';
import { INamedPanelSection, PanelSection, reMapPanelData } from './panel.section';

export function BasicInfoPanelSection({ handleClick, isActive, rawData}: INamedPanelSection ) {
  const data = {
    "Gross Area": 0,
    "Net Area": 0,
    "Floors": 0,
    "Circulation Factor": 0,
    "Loss Factor": 0,
  }

  const reMapped = reMapPanelData(rawData, data);
  const converted = convertDataToINamedValues(reMapped);
  const basicData = formatAreaData(converted);

  return (
    <PanelSection
      title="Basic Building Information"
      handleClick={handleClick}
      isActive={isActive}
      sectionData={basicData}
    />
  )
}