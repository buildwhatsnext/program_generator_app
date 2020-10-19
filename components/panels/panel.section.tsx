import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { convertDataToINamedValues, INamedValue, NamedValue } from '../NamedValue';
// import styles from './panel.section.module.scss';

export interface IPanelSection {
  title: string;
  handleClick: () => void;
  isActive: boolean;
  sectionData: Array<INamedValue>;
}

export interface INamedPanelSection {
  title: string;
  handleClick: () => void;
  isActive: boolean;
  rawData: Record<string,string>;
}

export function PanelSection({
  title,
  handleClick,
  isActive,
  sectionData,
}: IPanelSection) {
  const data = buildPanelSectionItem(sectionData);

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={title} />
        {isActive ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isActive} timeout="auto" unmountOnExit>
        <List>{data}</List>
      </Collapse>
    </>
  );
}

export function PanelSectionItem({ name, value }: INamedValue) {
  return (
    <ListItem>
      <NamedValue name={name} value={value} />
    </ListItem>
  );
}

export function buildPanelSectionItem(data: Array<INamedValue>) {
  const mapped = data.map((d: INamedValue, i: number) => {
    return <PanelSectionItem key={i} name={d.name} value={d.value} />;
  });
  return mapped;
}

export function reMapPanelData(originalData: Record<string, unknown>, newData: Record<string, unknown>): Record<string, unknown> {
  const value = newData;
  
  Object
    .values(originalData)
    .forEach((v,i) => {
      const name = Object.keys(value)[i];
      console.log(name);
      console.log(v);
      value[name] = v;
    });

  return value;
}

export function BasicInfoPanelSection({ handleClick, isActive, rawData}: INamedPanelSection ) {
  const data = {
    "Gross Area": 0,
    "Net Area": 0,
    "Floors": 0,
    "Circulation Factor": 0,
    "Planning Factor": 0,
  }

  const reMapped = reMapPanelData(rawData, data);

  const basicData = convertDataToINamedValues(reMapped);

  return (
    <PanelSection
      title="Basic Building Information"
      handleClick={handleClick}
      isActive={isActive}
      sectionData={basicData}
    />
  )
}