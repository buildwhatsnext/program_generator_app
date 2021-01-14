import React from 'react';
import { useDispatch } from 'react-redux';
import { IPage, Page } from '../../components/pages/page';
import { saveProject } from './project.functions';

const ProjectInformationPage = (props: IPage) => {
  // const { children, showPanel, nav, panel, nextRoute, extraNavClasses, navFx } = props;
  const { children, nextRoute, navFx } = props;
  const dispatch = useDispatch();

  const handleSaving = () => {
    navFx();
    dispatch(saveProject());
  }

  return (
    <Page nextRoute={nextRoute} navFx={handleSaving}>
      { children }
    </Page>
  )
}

export default ProjectInformationPage;