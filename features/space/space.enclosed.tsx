import React from 'react';
import { useDispatch } from 'react-redux';
import { Page } from '../../components/pages/page';
import { ROUTES } from '../../constants/routes';
import SpaceData from '../../components/table/table.component';
import { WorkspaceDataEntrySection } from './space.entry';
import { EnclosedOfficeSpace } from '../../components/spaces/Space';
import { dehydrateSpaceData, setEnclosedData } from './space.slice';

export function EnclosedWorkspaces() {
  const dispatch = useDispatch();
  const [tableData, setTableData] = React.useState<EnclosedOfficeSpace[]>(null);

  const passToStore = () => {
    const serialized = dehydrateSpaceData(tableData);

    dispatch(setEnclosedData(serialized));
  }

  const updateTableData = (data: EnclosedOfficeSpace[]) => {
    setTableData(data);
  }

  return (
    <Page nextRoute={ ROUTES.SPACE.ENCLOSED_UPDATE } navFx={passToStore}>
      <WorkspaceDataEntrySection 
        title="Enclosed Offices" 
        data={
          <SpaceData 
            type={EnclosedOfficeSpace} 
            tableDataHandler={updateTableData}
          />
        } 
      />
    </Page>
  )
}
