import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionCreatorWithOptionalPayload } from '@reduxjs/toolkit';
import SpaceData from '../../components/table/table.component';
// import { IRestorableState } from '../../features/info/general.building';
import { Space } from '../../../shared/types/Space';
import { selectProgram } from './space.slice';
import { hydrateSpaceState, dehydrateSpaceData, handleUpdate } from './space.functions';
import { calculateTotalSpatialArea } from '../../middleware/middleware.space';
import { DataEntrySection } from '../../components/display/display.entry';
import { preloadSpaces } from './space.loaders';

/**
 * @summary A data section that takes any Space type and can load it's data to/from the store
 * adding @param collapsible will make it able to be collapsed and @param startHidden handles 
 * whether this starts off in a collapsed manner or not
 */
export interface ISpaceDataSection<T extends Space> {
  title: string;
  type: new () => T;
  stateName: string;
  storeHandler: ActionCreatorWithOptionalPayload<string[], string>;
  areaHandler: ActionCreatorWithOptionalPayload<any, string>;
  collapsible?: boolean;
  startHidden?: boolean;
  readonly?: boolean;
  externalUpdater?: (data: any) => void;
}

export function SpaceDataSection<T extends Space>(sdsProps: ISpaceDataSection<T>) {
  const { title, type, stateName, storeHandler, areaHandler, collapsible, startHidden, readonly, externalUpdater } = sdsProps;
  // console.log(type);
  const start = preloadSpaces(type)
  const [tableData, setTableData] = React.useState(start);
  const dispatch = useDispatch();
  const program = useSelector(selectProgram);
  
  const spaceState = program[stateName];
  const hasPrevState = spaceState?.length > 0;

  // console.log(tableData);
  const data = hasPrevState ? hydrateSpaceState<T>(spaceState) : tableData;
  // console.log(data);

  const saveToStore = () => {
    if(externalUpdater) {
      externalUpdater(tableData);
    } else {
      handleUpdate(tableData, storeHandler, areaHandler, dispatch);
    }
  }

  const updateTableData = (updatedData: T[]) => {
    setTableData(updatedData);
  }

  useEffect(() =>{
    setTimeout(() => {
      saveToStore()
    }
      , 1000)
  },[tableData])

  return (
    <DataEntrySection 
      collapsible={collapsible}
      startHidden={startHidden}
      title={title}
      data={
        <SpaceData 
          type={type} 
          tableDataHandler={externalUpdater ?? updateTableData }
          prevData={data}
          readonly={readonly}
        />
      }
    />
  )
}
