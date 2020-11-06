import React from 'react';
import { Page } from '../../components/pages/page';
import { ISpaceDataSection, SpaceDataSection } from './space.section';
import { Space } from '../../components/spaces/Space';

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

  return (
    <Page nextRoute={nextRoute }>
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
