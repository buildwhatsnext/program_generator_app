import React from 'react';
import { useDispatch } from 'react-redux';
import { ROUTES } from '../../constants/routes';
import { Page } from '../../components/pages/page';
import { 
  TextualQuestionAnswerCombo as TextQuestion,
} from '../../components/info/question';
import { 
  setRsf,
  // setNetArea,
  setFloorCount
} from './info.slice';
import { updateBuildingArea } from '../../lib/updaters';
import { setTotalBuildingArea } from '../space/space.slice';
import styles from '../../components/transition/section.module.scss';


function BuildingConstraint() {
  const dispatch = useDispatch();

  const [answerOne, setAnswerOne] = React.useState(null);
  const [answerTwo, setAnswerTwo] = React.useState(null);
  const [answerThree, setAnswerThree] = React.useState(null);

  const passToStore = () => {
    dispatch(setRsf(answerOne));
    dispatch(updateBuildingArea(answerTwo));
    // dispatch(setTotalBuildingArea(answerTwo));
    // dispatch(setNetArea(answerTwo));
    dispatch(setFloorCount(answerThree));
  }

  const title = 'General Building Constraints'
  const Q1 = <p>What&apos;s the <b> total area of the space?</b></p>;
  const Q1Label = `Enter the total area of the space`;
  const Q2 = <p>What&apos;s the <b> net, or usable, area</b> of the space?</p>;
  const Q2Label = `Enter the net area of the space`;
  const Q3 = <p>How many <b>floors</b> are there in this space</p>;
  const Q3Label = `Enter the amount of floors`;
  const next = ROUTES.INFO.TARGET;

  return (
    <Page nextRoute={next} navFx={passToStore}>
      <div className={styles.section__questions}>
        <div className={styles.section__questions__title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.section__questions__content}>
          <TextQuestion 
            question={Q1}
            label={Q1Label}
            answerHandler={(x) => setAnswerOne(x)}
          />

          <TextQuestion 
            question={Q2}
            label={Q2Label}
            answerHandler={(x) => setAnswerTwo(x)}
          />

          <TextQuestion 
            question={Q3}
            label={Q3Label}
            answerHandler={(x) => setAnswerThree(x)}
          />
        </div>
      </div>
    </Page>
  );
};

export default BuildingConstraint;
