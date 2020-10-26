import React from 'react';
import { useDispatch } from 'react-redux';
import { ROUTES } from '../../constants/routes';
import { Page } from '../../components/pages/page';
import { 
  TextualQuestionAnswerCombo as TextQuestion,
} from '../../components/info/question';
import { 
  setCirculation,
  setPlanning,
  setWorkseatArea,
  setWorkseatTarget
} from '../program/program.slice';
import styles from '../../components/transition/section.module.scss';

function TargetMetric () {
  const dispatch = useDispatch();

  const [answerOne, setAnswerOne] = React.useState(null);
  const [answerTwo, setAnswerTwo] = React.useState(null);
  const [answerThree, setAnswerThree] = React.useState(null);
  const [answerFour, setAnswerFour] = React.useState(null);

  const passToStore = () => {
    dispatch(setCirculation(answerOne));
    dispatch(setPlanning(answerTwo));
    dispatch(setWorkseatArea(answerThree));
    dispatch(setWorkseatTarget(answerFour));
  }

  const title = 'Target Metrics';
  const Q1 = <p>What&apos;s the <b> target circulation factor? </b> </p>;
  const Q2 = <p>What&apos;s the <b> target planning factor? </b> </p>;
  const Q3 = <p>What&apos;s the <b> target area per workseat </b> </p>;
  const Q4 = <p>If you have it, what are the <b> target workseats </b> ?</p>;
  const next = ROUTES.PROGRAM.START;

  return (
    <Page nextRoute={next} navFx={passToStore}>
      <div className={styles.section__questions}>
        <div className={styles.section__questions__title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.section__questions__content}>
          <TextQuestion 
            question={Q1}
            label='Enter the target circulation factor (%)'
            answerHandler={(x) => setAnswerOne(x)}
          />

          <TextQuestion 
            question={Q2}
            label='Enter the target planning factor (%)'
            answerHandler={(x) => setAnswerTwo(x)}
          />

          <TextQuestion 
            question={Q3}
            label='Enter the target area per workseat'
            answerHandler={(x) => setAnswerThree(x)}
          />

          <TextQuestion 
            question={Q4}
            label='Enter the target for total number of workseats'
            answerHandler={(x) => setAnswerFour(x)}
          />
        </div>
      </div>
    </Page>
  );
};

export default TargetMetric;
