import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { ROUTES } from '../../../shared/constants/routes';
import { Page } from '../../components/pages/page';
import { 
  TextualQuestionAnswerCombo as TextQuestion,
  NumericalQuestionAnswerCombo as NumberQuestion
} from '../../components/info/question';
import { 
  selectOverview,
  setCirculation,
  setPlanning,
  setWorkseatArea,
  setWorkseatTarget
} from './project.slice';
import styles from '../../components/transition/section.module.scss';
import { IRestorableState } from '../../components/IRestorableState';
import ProjectInformationPage from './page.project';

function TargetMetric (props: IRestorableState) {
  const dispatch = useDispatch();
  const building = useSelector(selectOverview);

  const [answerOne, setAnswerOne] = React.useState<string>('0');
  const [answerTwo, setAnswerTwo] = React.useState<string>('0');
  const [answerThree, setAnswerThree] = React.useState<string>('0');
  const [answerFour, setAnswerFour] = React.useState<string>('0');

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
    } = building;

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
  },[props.hasPrevState, props.prevState])

  const title = 'Target Metrics';
  const Q1 = <p>What&apos;s the <b> target circulation factor? </b> </p>;
  const Q2 = <p>What&apos;s the <b> target loss factor? </b> </p>;
  const Q3 = <p>What&apos;s the <b> target area per workseat? </b></p>;
  const Q4 = <p>If you have it, what is the <b> target number of workseats? </b></p>;
  const next = ROUTES.SPACE.START;

  return (
    <ProjectInformationPage nextRoute={next} navFx={passToStore}>
      <div className={styles.section__questions}>
        <div className={styles.section__questions__title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.section__questions__content}>

          <NumberQuestion 
            question={Q1}
            label='Enter the target circulation factor (%)'
            answerHandler={(x) => setAnswerOne(x)}
            storedValue={answerOne}
            limit={100}
          />

          <NumberQuestion 
            question={Q2}
            label='Enter the target loss factor (%)'
            answerHandler={(x) => setAnswerTwo(x)}
            storedValue={answerTwo}
            limit={100 - Number(answerOne)}
          />

          <NumberQuestion 
            question={Q3}
            label='Enter the target area per workseat'
            answerHandler={(x) => setAnswerThree(x)}
            storedValue={answerThree}
          />

          <NumberQuestion 
            question={Q4}
            label='Enter the target number of workseats'
            answerHandler={(x) => setAnswerFour(x)}
            storedValue={answerFour}
          />
        </div>
      </div>
    </ProjectInformationPage>
  );
};

export default TargetMetric;
