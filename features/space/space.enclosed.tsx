import React from 'react';
import { useDispatch } from 'react-redux';
import { Page } from '../../components/pages/page';
import { ROUTES } from '../../constants/routes';
import SpaceData from '../../components/table/table.component';
import { WorkspaceDataEntrySection } from './space.entry';
import { EnclosedOfficeSpace } from '../../components/spaces/Space';

export function EnclosedWorkspaces() {
  const dispatch = useDispatch();
  const [tableData, setTableData] = React.useState(null);

  const passToStore = () => {
    dispatch(setEnclosedData(tableData));
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
