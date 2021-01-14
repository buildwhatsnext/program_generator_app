import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingState } from '../../../shared/types/LoadingStates';
import { IPage, Page } from '../../components/pages/page';
import { saveProject } from './project.functions';
import { selectOverview } from './project.slice';

const ProjectInformationPage = (props: IPage) => {
  const { children, nextRoute, navFx, loadingState } = props;
  const dispatch = useDispatch();
  const [ isLoading, setLoading ] = React.useState(true);

  const handleSaving = () => {
    navFx();
    dispatch(saveProject());
  }

  useEffect(() => {
    const evaled = loadingState !== LoadingState.Loaded && loadingState !== LoadingState.Error;
    const msg = evaled ? "Loading" : "Not Loading";
    console.log(msg)
    console.log(loadingState);
    console.log(LoadingState.Loaded);
    console.log(loadingState === LoadingState.Loaded);
    setLoading(evaled);
  }, [loadingState])

  return (
    <Page nextRoute={nextRoute} navFx={handleSaving}>
      { 
        isLoading 
          ? 'Loading...!' 
          : children 
      }
    </Page>
  )
}

export default ProjectInformationPage;