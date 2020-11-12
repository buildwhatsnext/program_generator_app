import React from 'react';
import { useSelector } from 'react-redux';
import { MeetingSpace } from '../../shared/types/Space';
import { hydrateSpaceState } from '../../client/features/space/space.functions';
import { selectProgram, setMeetingData, setMeetingTotalArea } from '../../client/features/space/space.slice';
import { ROUTES } from '../../shared/constants/routes';
import { GenericSpacePage } from '../../client/features/space/space.generic';

export default function OpenPlanWorkspacePage() {
  // const program = useSelector(selectProgram);
  // const hasPrevState = program.MeetingState.length > 0;

  // const hydratedState = hydrateSpaceState<MeetingSpace>(program.MeetingState);

  return (
    <GenericSpacePage 
      title='Meeting Space'
      nextRoute={ROUTES.SPACE.MEETING_UPDATE}
      type={MeetingSpace}
      stateName='MeetingState'
      storeHandler={setMeetingData}
      areaHandler={setMeetingTotalArea}
      // hasPrevState={hasPrevState}
      // prevState={hydratedState}
    />
  )
}