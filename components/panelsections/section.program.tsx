import React from 'react';
import { convertDataToINamedValues } from '../NamedValue';
import { INamedPanelSection, PanelSection, reMapPanelData } from './panel.section';

export function ProgramInfoPanelSection({ handleClick, isActive, rawData}: INamedPanelSection ) {
  // let data = new StructuredProgramPanelData();
  const data = {
    "Total Programmed Area": 0,
    "Workseat Ratio": 0,
    "Total Number of Work Seats": 0,
    "Collaboration Ratio": 0,
  }
  const reMapped = reMapPanelData(rawData, data);
  // const formatted = formatProgramPanelData(reMapped);
  // const basicData = convertDataToINamedValues(formatted);
  const basicData = convertDataToINamedValues(reMapped);

  return (
    <PanelSection
      title="Programmed Space"
      handleClick={handleClick}
      isActive={isActive}
      sectionData={basicData}
    />
  )
}