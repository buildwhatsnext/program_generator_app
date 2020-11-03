import React from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreatorWithOptionalPayload } from '@reduxjs/toolkit';
import { Page } from '../../components/pages/page';
import SpaceData from '../../components/table/table.component';
import { WorkspaceDataEntrySection } from './space.entry';
import { Space } from '../../components/spaces/Space';
import { dehydrateSpaceData } from './space.slice';
import { calculateTotalSpatialArea } from '../../lib/middleware/middleware.space';
import { IHasStatePage } from '../info/general.building';


export interface IGenericSpacePage<T extends Space> extends IHasStatePage {
  pageTitle: string;
  nextRoute: string;
  type: new () => T;
  storeHandler: ActionCreatorWithOptionalPayload<string[], string>
  areaHandler: ActionCreatorWithOptionalPayload<any, string>
}

export function GenericSpacePage<T extends Space>(props: IGenericSpacePage<T>) {
  const dispatch = useDispatch();
  const [tableData, setTableData] = React.useState<T[]>(null);

  const passToStore = () => {
    const serialized = dehydrateSpaceData(tableData);
    dispatch(props.storeHandler(serialized));
    dispatch(calculateTotalSpatialArea(serialized, props.areaHandler))
  }

  const updateTableData = (data: T[]) => {
    setTableData(data);
  }

  return (
    <Page nextRoute={ props.nextRoute } navFx={passToStore}>
      <WorkspaceDataEntrySection 
        title={props.pageTitle}
        data={
          <SpaceData 
            type={props.type} 
            tableDataHandler={updateTableData}
            prevData={props.prevState}
          />
        } 
      />
    </Page>
  )
}
