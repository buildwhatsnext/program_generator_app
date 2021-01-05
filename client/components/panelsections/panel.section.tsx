import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { convertDataToINamedValues, INamedValue, NamedValue } from '../text/NamedValue';
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
  const mapped = data?.map((d: INamedValue) => {
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

export interface IPanelSectionItemData {
  name: string;
  value: string;
  error?: boolean;
}

export function PanelSectionItem({ name: itemName, value: itemValue, error: inErrorState }: IPanelSectionItemData) {
  return (
    <ListItem>
      <NamedValue 
        name={itemName} 
        value={itemValue} 
        className={styles.panelData}
        nameClass={styles.panelData__name}
        valueClass={inErrorState ? styles.panelData__error : styles.panelData__value}
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
      value[name] = v;
    });

  return value;
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



// function formatProgramPanelData(data: Record<string, unknown>) {
//   const { overview } = useSelector(selectProgram);
//   const { hasBroadcast, hasLab } = overview.general;

//   if(!hasBroadcast)
//     delete data["Total Number of Broadcast Spaces"];

//   if(!hasLab)
//     delete data["Total Number of Lab Spaces"];

//   return data;
// }