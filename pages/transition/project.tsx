import { TransitionPage } from '../../components/transition/page';
import { TransitionSection } from '../../components/transition/section';
import { ROUTES } from '../../constants/routes';
import styles from './project.module.scss';

export default function TransitionProjectPage() {
  const desc = `Let's get more information about the project you're creating a program for`;
  const forward = `Start General Information`;
  const to = ROUTES.INFO.GENERAL

  return (
    <TransitionPage showPanel>
      <TransitionSection
        desc={desc}
        fwdBtnText={forward}
        to={to}
      />
    </TransitionPage>
  );
}