import { TransitionPage } from '../../client/components/transition/page';
import { TransitionSection } from '../../client/components/transition/section';
import { ROUTES } from '../../shared/constants/routes';

export default function TransitionInfoPage() {
  const desc = `Let's get more information about the space you want to program`;
  const forward = `Start General Information`;

  return (
    <TransitionPage showPanel>
      <TransitionSection
        desc={desc}
        to={ROUTES.INFO.GENERAL}
        fwdBtnText={forward}
      />
    </TransitionPage>
  );
}