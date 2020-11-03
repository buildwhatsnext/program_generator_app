import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Page } from '../../components/pages/page';
import { ROUTES } from '../../constants/routes';
import SpaceData from '../../components/table/table.component';
import { WorkspaceDataEntrySection } from './space.entry';
import { EnclosedOfficeSpace } from '../../components/spaces/Space';
import { dehydrateSpaceData, selectProgram, setEnclosedData, setEnclosedTotalArea } from './space.slice';
import { calculateTotalSpatialArea } from '../../lib/middleware/middleware.space';
import { IHasStatePage } from '../info/general.building';

export function EnclosedWorkspaces(props: IHasStatePage) {
  const dispatch = useDispatch();
  const program = useSelector(selectProgram);
  const [tableData, setTableData] = React.useState<EnclosedOfficeSpace[]>(null);

  const passToStore = () => {
    const serialized = dehydrateSpaceData(tableData);

    dispatch(setEnclosedData(serialized));
    dispatch(calculateTotalSpatialArea(serialized))
  }

  const updateTableData = (data: EnclosedOfficeSpace[]) => {
    setTableData(data);
  }

  function hydrateState() {
    const enclosed: EnclosedOfficeSpace[] = program.EnclosedState.map(space => {
      const hydrated: EnclosedOfficeSpace = JSON.parse(space);
      return hydrated;
    });

    console.log('Setting the retrieved Enclosed data');
    console.log(enclosed);
    return enclosed;
  }

  const hydratedState = hydrateState();

  return (
    <Page nextRoute={ ROUTES.SPACE.ENCLOSED_UPDATE } navFx={passToStore}>
      <WorkspaceDataEntrySection 
        title="Enclosed Offices" 
        data={
          <SpaceData 
            type={EnclosedOfficeSpace} 
            tableDataHandler={updateTableData}
            prevData={hydratedState}
          />
        } 
      />
    </Page>
  )
}
