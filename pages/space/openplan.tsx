import React from 'react';
import { useSelector } from 'react-redux';
import { OpenOfficeSpace } from '../../components/spaces/Space';
import { hydrateSpaceState } from '../../features/space/space.functions';
import { selectProgram, setOpenOfficeData, setOpenOfficeTotalArea } from '../../features/space/space.slice';
import { ROUTES } from '../../constants/routes';
import { GenericSpacePage } from '../../features/space/space.generic';

export default function OpenPlanWorkspacePage() {
  // const program = useSelector(selectProgram);
  // const hasPrevState = program.OpenPlanState.length > 0;

  // const hydratedState = hydrateSpaceState<OpenOfficeSpace>(program.OpenPlanState);

  return (
    <GenericSpacePage 
      title='Open Offices'
      nextRoute={ROUTES.SPACE.OPEN_PLAN_UPDATE}
      type={OpenOfficeSpace}
      stateName='OpenPlanState'
      storeHandler={setOpenOfficeData}
      areaHandler={setOpenOfficeTotalArea}
      // hasPrevState={hasPrevState}
      // prevState={hydratedState}
    />
  )
}