import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { INamedValue, NamedValue } from '../NamedValue';
// import styles from './panel.section.module.scss';

export interface IPanelSection {
  title: string;
  handleClick: () => void;
  isActive: boolean;
  sectionData: Array<INamedValue>;
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