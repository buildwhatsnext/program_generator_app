import React from 'react';
import { useDispatch } from 'react-redux';
import { Page } from '../../components/pages/page';
import { ISpaceDataSection, SpaceDataSection } from './space.section';
import { dehydrateSpaceData } from './space.functions';
import { calculateTotalSpatialArea } from '../../middleware/middleware.space';
import { Space } from '../../../shared/types/Space';
import { processSpatialData } from '../../../shared/lib/conversion';
import { saveProject } from '../project/project.functions';

export interface IGenericSpacePage<T extends Space> extends ISpaceDataSection<T> {
  nextRoute: string;
}

/**
 * @summary Renders a page that can autosave & restore data from state
 * @param props accepts IGenericSpacePage shaped data that specifies a particular
 * kind of "Space"
 */
export function GenericSpacePage<T extends Space>(props: IGenericSpacePage<T>) {
  const { title, nextRoute, type, stateName, storeHandler, areaHandler } = props;
  const [tableData, setTableData] = React.useState(null);

  const dispatch = useDispatch();

  const saveToStore = () => {
    const converted = processSpatialData(tableData);
    const serialized = dehydrateSpaceData(converted);
    dispatch(storeHandler(serialized));
    dispatch(calculateTotalSpatialArea(serialized, areaHandler))
  }

  const saveData = () => {
    saveToStore();
    dispatch(saveProject());
  }

  return (
    <Page nextRoute={nextRoute} navFx={saveData}>
      <SpaceDataSection 
        title={title}
        type={type}
        stateName={stateName}
        storeHandler={storeHandler}
        areaHandler={areaHandler}
        externalUpdater={setTableData}
      />
    </Page>
  )
}
