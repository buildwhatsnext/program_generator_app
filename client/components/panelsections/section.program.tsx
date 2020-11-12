import React from 'react';
import { tryConvertToNumber } from '../../../shared/lib/conversion';
import { convertDataToINamedValues } from '../text/NamedValue';
import { INamedPanelSection, PanelSection, reMapPanelData } from './panel.section';

export function ProgramInfoPanelSection({ handleClick, isActive, rawData}: INamedPanelSection ) {
  // let data = new StructuredProgramPanelData();
  const data = {
    "Total Programmed Area": 0,
    "Workseat Ratio": 0,
    "Total Number of Work Seats": 0,
    "Collaboration Ratio": 0,
  }

  data["Total Programmed Area"] = tryConvertToNumber(rawData.totalProgrammedArea);
  data["Workseat Ratio"] = tryConvertToNumber(rawData.totalWorkseatRatio);
  data["Total Number of Work Seats"] = tryConvertToNumber(rawData.totalNumOfWorkseats);
  data["Collaboration Ratio"] = tryConvertToNumber(rawData.totalCollaborationRatio);
  const basicData = convertDataToINamedValues(data);

  return (
    <PanelSection
      title="Programmed Space"
      handleClick={handleClick}
      isActive={isActive}
      sectionData={basicData}
    />
  )
}