import React from 'react';
import { useDispatch } from 'react-redux';
import { Page } from '../../components/pages/page';
import { ISpaceDataSection, SpaceDataSection } from './space.section';
import { Space } from '../../../shared/types/Space';
import { saveProject } from '../project/project.slice';

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

  const dispatch = useDispatch();
  const saveData = () => {
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
      />
    </Page>
  )
}
