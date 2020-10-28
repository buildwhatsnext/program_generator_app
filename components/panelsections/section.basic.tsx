import React from 'react';
import { tryConvertToNumber } from '../../lib/conversion';
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

  data['Gross Area'] = tryConvertToNumber(rawData.areaGross);
  data['Net Area'] = tryConvertToNumber(rawData.areaNet);
  // eslint-disable-next-line dot-notation
  data['Floors'] = tryConvertToNumber(rawData.floors);
  data['Circulation Factor'] = tryConvertToNumber(rawData.targetFactorCirculation);
  data['Loss Factor'] = tryConvertToNumber(rawData.targetFactorLoss);

  // const reMapped = reMapPanelData(rawData, data);
  const converted = convertDataToINamedValues(data);
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