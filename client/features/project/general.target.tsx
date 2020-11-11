import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { ROUTES } from '../../../shared/constants/routes';
import { Page } from '../../components/pages/page';
import { 
  TextualQuestionAnswerCombo as TextQuestion,
} from '../../components/info/question';
import { 
  selectOverview,
  setCirculation,
  setPlanning,
  setWorkseatArea,
  setWorkseatTarget
} from './info.slice';
import styles from '../../components/transition/section.module.scss';
import { IRestorableState } from './general.building';

function TargetMetric (props: IRestorableState) {
  const dispatch = useDispatch();
  const overview = useSelector(selectOverview);

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

  const restoreState = () => {
    const { 
      targetFactorCirculation, 
      targetFactorLoss, 
      targetAreaPerWorkseat, 
      targetNumOfWorkseats 
    } = overview;

    setAnswerOne(targetFactorCirculation);
    setAnswerTwo(targetFactorLoss);
    setAnswerThree(targetAreaPerWorkseat);
    setAnswerFour(targetNumOfWorkseats);
  }
  
  useEffect(() => {
    if(props.hasPrevState) {
      restoreState();
    }

    return () => {
      console.log('Cleaning up the subscription');
    }
  },[props.hasPrevState])

  const title = 'Target Metrics';
  const Q1 = <p>What&apos;s the <b> target circulation factor? </b> </p>;
  const Q2 = <p>What&apos;s the <b> target loss factor? </b> </p>;
  const Q3 = <p>What&apos;s the <b> target area per workseat </b> </p>;
  const Q4 = <p>If you have it, what are the <b> target workseats </b> ?</p>;
  const next = ROUTES.SPACE.START;

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
            storedValue={answerOne}
          />

          <TextQuestion 
            question={Q2}
            label='Enter the target loss factor (%)'
            answerHandler={(x) => setAnswerTwo(x)}
            storedValue={answerTwo}
          />

          <TextQuestion 
            question={Q3}
            label='Enter the target area per workseat'
            answerHandler={(x) => setAnswerThree(x)}
            storedValue={answerThree}
          />

          <TextQuestion 
            question={Q4}
            label='Enter the target for total workseats'
            answerHandler={(x) => setAnswerFour(x)}
            storedValue={answerFour}
          />
        </div>
      </div>
    </Page>
  );
};

export default TargetMetric;
