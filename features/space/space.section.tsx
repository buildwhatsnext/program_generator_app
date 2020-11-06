import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionCreatorWithOptionalPayload } from '@reduxjs/toolkit';
import SpaceData from '../../components/table/table.component';
import { Space } from '../../components/spaces/Space';
import { dehydrateSpaceData, selectProgram } from './space.slice';
import { hydrateSpaceState } from './space.functions';
import { calculateTotalSpatialArea } from '../../lib/middleware/middleware.space';
import { DataEntrySection } from '../../components/display/display.entry';

export interface ISpaceDataSection<T extends Space> {
  title: string;
  type: new () => T;
  stateName: string;
  storeHandler: ActionCreatorWithOptionalPayload<string[], string>;
  areaHandler: ActionCreatorWithOptionalPayload<any, string>;
  collapsible?: boolean;
  startHidden?: boolean;
}

export function SpaceDataSection<T extends Space>(sdsProps: ISpaceDataSection<T>) {
  const [tableData, setTableData] = React.useState(null);

  const { title, type, stateName, storeHandler, areaHandler, collapsible, startHidden } = sdsProps;
  const dispatch = useDispatch();
  const program = useSelector(selectProgram);
  
  const spaceState = program[stateName];
  const hasPrevState = spaceState?.length > 0;

  const data = hasPrevState ? hydrateSpaceState<T>(spaceState) : tableData;

  const saveToStore = () => {
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
      // console.log('Table data is updating...');
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
          tableDataHandler={updateTableData}
          prevData={data}
        />
      }
    />
  )
}
