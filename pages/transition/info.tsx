import { TransitionPage } from '../../components/transition/page';
import { TransitionSection } from '../../components/transition/section';
import { ROUTES } from '../../constants/routes';

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