import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionCreatorWithOptionalPayload } from '@reduxjs/toolkit';
import SpaceData from '../../components/table/table.component';
// import { IRestorableState } from '../../features/info/general.building';
import { Space } from '../../../shared/types/Space';
import { selectProgram } from './space.slice';
import { hydrateSpaceState, dehydrateSpaceData } from './space.functions';
import { calculateTotalSpatialArea } from '../../middleware/middleware.space';
import { DataEntrySection } from '../../components/display/display.entry';

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
  const [tableData, setTableData] = React.useState(null);

  const { title, type, stateName, storeHandler, areaHandler, collapsible, startHidden, readonly, externalUpdater } = sdsProps;
  const dispatch = useDispatch();
  const program = useSelector(selectProgram);
  
  const spaceState = program[stateName];
  const hasPrevState = spaceState?.length > 0;

  const data = hasPrevState ? hydrateSpaceState<T>(spaceState) : tableData;

  const saveToStore = () => {
    if(!externalUpdater)
      return;
    // console.log('Saving to the app storage');
    const serialized = dehydrateSpaceData(tableData);
    dispatch(storeHandler(serialized));
    dispatch(calculateTotalSpatialArea(serialized, areaHandler))
  }

  const updateTableData = (updatedData: T[]) => {
    setTableData(updatedData);
  }

  useEffect(() =>{
    setTimeout(() => {
      console.log('Table data is updating...');
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
