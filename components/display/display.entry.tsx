import { ActionCreatorWithOptionalPayload } from '@reduxjs/toolkit';
import React from 'react';
import SpaceData from '../table/table.component';
import { IRestorableState } from '../../features/info/general.building';
import { Space } from '../spaces/Space';
import styles from './display.entry.module.scss';

interface props {
  title: string;
  data?: any;
}

export function DataEntrySection({title, data = null}: props) {
  return (
    <div className={styles.section}>
      <div className="section__title">
        <h2>
          {title}
        </h2>
      </div>
      <div className={styles.section__content}>
        { data }
      </div>
    </div>
  )
}

export function CollapsibleDataEntrySection({title, data = null}: props) {
  const [isHidden, setHidden] = React.useState(false);

  const toggleHidden = () => {
    const msg = isHidden ? 'Reveal' : 'Hide';
    console.log(msg);

    setHidden(!isHidden);
  }

  return (
    <div>
      <span onClick={() => toggleHidden()} role="button">+</span>
      <DataEntrySection title={title} data={isHidden ? null : data} />
    </div>
  )
}

interface IGenericDataSection<T extends Space> extends IRestorableState {
  sectionTitle: string;
  type: new () => T;
  storeHandler: ActionCreatorWithOptionalPayload<string[], string>;
  areaHandler: ActionCreatorWithOptionalPayload<any, string>;
  tableDataHandler: (data: T[]) => void;
}

export function GenericDataEntrySection<T extends Space>(sectionProps: IGenericDataSection<T>) {
  const { 
    sectionTitle,
    type,
    prevState,
    hasPrevState,
    storeHandler,
    areaHandler,
    tableDataHandler
  } = sectionProps;

  return (
    <DataEntrySection 
      title={sectionTitle}
      data={
        <SpaceData 
          type={type} 
          tableDataHandler={tableDataHandler}
          prevData={prevState}
        />
      }
    />
  )
}

export function SpaceDataSection<T extends Space>(props: any) {
  return (
    <CollapsibleDataEntrySection 
      title={props.title}
      data={}
    />
  )
}