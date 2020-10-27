import React from 'react';
import { useDispatch } from 'react-redux';
import { ROUTES } from '../../constants/routes';
import { Page } from '../../components/pages/page';
import { 
  TextualQuestionAnswerCombo as TextQuestion,
  ToggleQuestionAnswerCombo as TogQuest 
} from '../../components/info/question';
import { 
  setClient, 
  setUnits, 
  setTenancy,
  setBroadcast,
  setLab 
} from './info.slice';
import styles from '../../components/transition/section.module.scss';

function BuildingInformation() {
  const dispatch = useDispatch();

  const [answerOne, setAnswerOne] = React.useState(null);
  const [answerTwo, setAnswerTwo] = React.useState(null);
  const [answerThree, setAnswerThree] = React.useState(null);
  const [answerFour, setAnswerFour] = React.useState(null);
  const [answerFive, setAnswerFive] = React.useState(null);

  const passToStore = () => {
    dispatch(setClient(answerOne));
    dispatch(setUnits(answerTwo));
    dispatch(setTenancy(answerThree));
    dispatch(setBroadcast(answerFour));
    dispatch(setLab(answerFive));
  }

  const title = 'General Building Information';
  const Q1 = <p>What is your <b>client&apos;s name?</b></p>;
  const Q2 = <p>Which <b> units </b> should we use to measure your space? </p>;
  const Q3 = <p>Is your space a <b> multi-tenant </b> or <b> single-tenant? </b> </p>;
  const Q4 = <p>Is this space a <b> broadcast </b> studio?</p>;
  const Q5 = <p>Does this program include any <b> lab </b> spaces?</p>;
  const next = ROUTES.INFO.CONSTRAINTS;

  return (
    <Page nextRoute={next} navFx={passToStore}>
      <div className={styles.section__questions}>
        <div className={styles.section__questions__title}>
          <h2>{ title }</h2>
        </div>
        <div className={styles.section__questions__content}>
          <TextQuestion 
            question={Q1}
            label='Please enter the name of your client'
            answerHandler={(x) => setAnswerOne(x)}
          />
          <TogQuest 
            question={Q2}
            answers={[ 'Metric', 'Imperial']}
            answerHandler={(x) => setAnswerTwo(x)}
          />

          <TogQuest 
            question={Q3}
            answers={[ 'Single', 'Multi']}
            answerHandler={(x) => setAnswerThree(x)}
          />

          <TogQuest 
            question={Q4}
            answers={[ 'Yes', 'No']}
            answerHandler={(x) => setAnswerFour(x)}
          />

          <TogQuest 
            question={Q5}
            answers={[ 'Yes', 'No']}
            answerHandler={(x) => setAnswerFive(x)}
          />
        </div>  
      </div>
      
    </Page>
  );
}

export default BuildingInformation;
