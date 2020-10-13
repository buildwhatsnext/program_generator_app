import { TransitionPage } from '../../components/transition/page';
import { TransitionSection } from '../../components/transition/section';
import { ROUTES } from '../../constants/routes';

export default function TransitionProgramUpdatePage(spaceType?: string) {
  const desc = spaceType 
    ? `Next, we'll look at ${spaceType} requirements`
    : `Here's an update on your program, let's continue!`;
  const forward = spaceType 
    ? `Start General Information`
    : 'Next Section';

  return (
    <TransitionPage showPanel>
      <TransitionSection
        desc={desc}
        fwdBtnText={forward}
        to={ROUTES.INFO.GENERAL}
      />
    </TransitionPage>
  );
}