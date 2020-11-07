import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionCreatorWithOptionalPayload } from '@reduxjs/toolkit';
import SpaceData from '../../components/table/table.component';
// import { IRestorableState } from '../../features/info/general.building';
import { Space } from '../../../shared/types/Space';
import { dehydrateSpaceData, selectProgram } from './space.slice';
import { hydrateSpaceState } from './space.functions';
import { calculateTotalSpatialArea } from '../../middleware/middleware.space';
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
    console.log('Saving to the app storage');
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
          tableDataHandler={updateTableData}
          prevData={data}
        />
      }
    />
  )
}

// interface IGenericDataSection<T extends Space> extends IRestorableState {
//   sectionTitle: string;
//   type: new () => T;
//   storeHandler: ActionCreatorWithOptionalPayload<string[], string>;
//   areaHandler: ActionCreatorWithOptionalPayload<any, string>;
//   tableDataHandler: (data: T[]) => void;
// }

// export function GenericDataEntrySection<T extends Space>(sectionProps: IGenericDataSection<T>) {
//   const { 
//     sectionTitle,
//     type,
//     prevState,
//     hasPrevState,
//     storeHandler,
//     areaHandler,
//     tableDataHandler
//   } = sectionProps;

//   return (
//     <DataEntrySection 
//       title={sectionTitle}
//       data={
//         <SpaceData 
//           type={type} 
//           tableDataHandler={tableDataHandler}
//           prevData={prevState}
//         />
//       }
//     />
//   )
// }
