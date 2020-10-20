/* eslint-disable lines-between-class-members */
import React from 'react';
import _, { map } from 'underscore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useSelector } from 'react-redux';
import { selectProgram } from '../../features/program/program.slice';
import { convertDataToINamedValues, INamedValue, NamedValue } from '../NamedValue';
import styles from './panel.section.module.scss';

export interface IPanelSection {
  title: string;
  handleClick: () => void;
  isActive: boolean;
  sectionData: Array<INamedValue>;
}

export interface INamedPanelSection {
  // title: string;
  handleClick: () => void;
  isActive: boolean;
  rawData: Record<string,string>;
}

export function buildPanelSectionItem(data: Array<INamedValue>): JSX.Element[] {
  const mapped = data.map((d: INamedValue) => {
    return (
      <PanelSectionItem 
        key={d.name} 
        name={d.name} 
        value={d.value} 
      />
    );
  });
  return mapped;
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
        <ListItemText primary={title} className={styles.panelTitle} />
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
      <NamedValue 
        name={name} 
        value={value} 
        className={styles.panelData}
        nameClass={styles.panelData__name}
        valueClass={styles.panelData__value}
      />
    </ListItem>
  );
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

interface IStructuredProgramPanelData {
  "Total Number of Offices": number,
  "Total Number of Open Workspaces": number,
  "Total Number of Meeting Spaces": number,
  "Total Number of Amenity Spaces": number,
  "Total Number of Support Spaces": number,
  "Total Number of Broadcast Spaces": number,
  "Total Number of Lab Spaces": number,
  "Programmed Workseats": number,
  "Programmed Meeting Seats/Work Seats": string
}

class StructuredProgramPanelData implements IStructuredProgramPanelData {
  "Total Number of Offices": 0;
  "Total Number of Open Workspaces": 0;
  "Total Number of Meeting Spaces": 0;
  "Total Number of Amenity Spaces": 0;
  "Total Number of Support Spaces": 0;
  "Total Number of Broadcast Spaces": 0;
  "Total Number of Lab Spaces": 0;
  "Programmed Workseats": 0;
  "Programmed Meeting Seats/Work Seats": '0.0';
}

export function ProgramInfoPanelSection({ handleClick, isActive, rawData}: INamedPanelSection ) {
  // let data = new StructuredProgramPanelData();
  const data = {
    "Total Number of Offices": 0,
    "Total Number of Open Workspaces": 0,
    "Total Number of Meeting Spaces": 0,
    "Total Number of Amenity Spaces": 0,
    "Total Number of Support Spaces": 0,
    "Total Number of Broadcast Spaces": 0,
    "Total Number of Lab Spaces": 0,
    "Programmed Workseats": 0,
    "Programmed Meeting Seats/Work Seats": '0.0'
  }
  const reMapped = reMapPanelData(rawData, data);
  const formatted = formatProgramPanelData(reMapped);
  const basicData = convertDataToINamedValues(formatted);

  return (
    <PanelSection
      title="Programmed Space"
      handleClick={handleClick}
      isActive={isActive}
      sectionData={basicData}
    />
  )
}

function formatProgramPanelData(data: Record<string, unknown>) {
  const { overview } = useSelector(selectProgram);
  const { hasBroadcast, hasLab } = overview.general;

  if(!hasBroadcast)
    delete data["Total Number of Broadcast Spaces"];

  if(!hasLab)
    delete data["Total Number of Lab Spaces"];

  return data;
}