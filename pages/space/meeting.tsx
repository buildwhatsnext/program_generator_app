import React from 'react';
import { useSelector } from 'react-redux';
import { MeetingSpace } from '../../components/spaces/Space';
import { hydrateSpaceState } from '../../features/space/space.functions';
import { selectProgram, setMeetingData, setMeetingTotalArea } from '../../features/space/space.slice';
import { ROUTES } from '../../constants/routes';
import { GenericSpacePage } from '../../features/space/space.generic';

export default function OpenPlanWorkspacePage() {
  const program = useSelector(selectProgram);
  const hasPrevState = program.MeetingState.length > 0;

  const hydratedState = hydrateSpaceState<MeetingSpace>(program.MeetingState);

  return (
    <GenericSpacePage 
      pageTitle='Meeting Space'
      nextRoute={ROUTES.SPACE.MEETING_UPDATE}
      type={MeetingSpace}
      storeHandler={setMeetingData}
      areaHandler={setMeetingTotalArea}
      hasPrevState={hasPrevState}
      prevState={hydratedState}
    />
  )
}