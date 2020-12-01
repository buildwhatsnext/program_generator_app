import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { ROUTES } from '../../../shared/constants/routes';
import { 
  TextualQuestionAnswerCombo as TextQuestion,
  ToggleQuestionAnswerCombo as TogQuest 
} from '../../components/info/question';
import { 
  setClient, 
  setUnits, 
  setTenancy,
  setBroadcast,
  setLab,
  selectOverview,
} from './project.slice';
import styles from '../../components/transition/section.module.scss';
import { IRestorableState } from '../../components/IRestorableState';
import ProjectInformationPage from './page.project';


function BuildingInformation(props: IRestorableState) {
  const dispatch = useDispatch();
  const overview = useSelector(selectOverview);

  const [answerOne, setAnswerOne] = React.useState(null);
  const [answerTwo, setAnswerTwo] = React.useState(null);
  const [answerThree, setAnswerThree] = React.useState(null);
  const [answerFour, setAnswerFour] = React.useState(null);
  const [answerFive, setAnswerFive] = React.useState(null);

  const restoreState = () => {
    const msg = (props.hasPrevState)
        ? 'This page has previous state'
        : 'No previous state for this page';

    console.log(msg);
    const { client, units, tenancy, hasBroadcast, hasLab } = overview;
  
    const clientData = client?.toLowerCase() === 'unknown' ? '' : client;
    const unitData = units?.toLowerCase() === 'unknown' ? '' : units;
    const tenancyData = tenancy?.toLowerCase() === 'unknown' ? '' : tenancy;
    const broadcastData = hasBroadcast ? 'Yes' : 'No';
    const labData = hasLab ? 'Yes' : 'No';
    setAnswerOne(clientData);
    setAnswerTwo(unitData);
    setAnswerThree(tenancyData);
    setAnswerFour(broadcastData);
    setAnswerFive(labData);
  }

  useEffect(() => {
    if(props.hasPrevState) {
      restoreState();
    }

    return () => {
      console.log('Cleaning up the subscription');
    }
  },[props.hasPrevState])

  const passToStore = () => {
    dispatch(setClient(answerOne));
    dispatch(setUnits(answerTwo));
    dispatch(setTenancy(answerThree));
    dispatch(setBroadcast(answerFour));
    dispatch(setLab(answerFive));
  }

  const title = 'General Building Information';
  const Q1 = <p>What is your <b>client&apos;s name?</b></p>;
  const Q2 = <p>Which <b> units </b> should we use to measure the space? </p>;
  const Q3 = <p>Is this space a <b> multi-tenant </b> or <b> single-tenant? </b> </p>;
  const Q4 = <p>Is this space a <b> broadcast </b> studio?</p>;
  const Q5 = <p>Does this program include any <b> lab </b> spaces?</p>;
  const next = ROUTES.INFO.CONSTRAINTS;

  return (
    <ProjectInformationPage nextRoute={next} navFx={passToStore}>
      <div className={styles.section__questions}>
        <div className={styles.section__questions__title}>
          <h2>{ title }</h2>
        </div>
        <div className={styles.section__questions__content}>
          <TextQuestion 
            question={Q1}
            label='Please enter the name of your client'
            answerHandler={(x) => setAnswerOne(x)}
            storedValue={answerOne}
          />
          <TogQuest 
            question={Q2}
            answers={[ 'Metric', 'Imperial']}
            answerHandler={(x) => setAnswerTwo(x)}
            storedValue={answerTwo}
          />

          <TogQuest 
            question={Q3}
            answers={[ 'Single', 'Multi']}
            answerHandler={(x) => setAnswerThree(x)}
            storedValue={answerThree}
          />

          <TogQuest 
            question={Q4}
            answers={[ 'Yes', 'No']}
            answerHandler={(x) => setAnswerFour(x)}
            storedValue={answerFour}
          />

          <TogQuest 
            question={Q5}
            answers={[ 'Yes', 'No']}
            answerHandler={(x) => setAnswerFive(x)}
            storedValue={answerFive}
          />
        </div>  
      </div>
      
    </ProjectInformationPage>
  );
}

export default BuildingInformation;
