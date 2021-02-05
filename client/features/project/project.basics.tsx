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
  setProjectName,
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
  const [answerSix, setAnswerSix] = React.useState(null);

  const restoreState = () => {
    const msg = (props.hasPrevState)
        ? 'This page has previous state'
        : 'No previous state for this page';

    console.log(msg);
    const { client, units, tenancy, hasBroadcast, hasLab, ProjectName } = overview;
  
    const clientData = client?.toLowerCase() === 'unknown' ? '' : client;
    const ProjectNameData = ProjectName?.toLowerCase() === 'unknown' ? '' : ProjectName;
    const unitData = units?.toLowerCase() === 'unknown' ? '' : units;
    const tenancyData = tenancy?.toLowerCase() === 'unknown' ? '' : tenancy;
    const broadcastData = hasBroadcast ? 'Yes' : 'No';
    const labData = hasLab ? 'Yes' : 'No';
    
    setAnswerOne(clientData);
    setAnswerTwo(ProjectNameData);
    setAnswerThree(unitData);
    setAnswerFour(tenancyData);
    setAnswerFive(broadcastData);
    setAnswerSix(labData)
  }

  useEffect(() => {
    if(props.hasPrevState) {
      restoreState();
    }

    return () => {
      console.log('Cleaning up the subscription');
    }
  },[props.hasPrevState, props.prevState])

  const passToStore = () => {
    dispatch(setClient(answerOne));
    dispatch(setProjectName(answerTwo));
    dispatch(setUnits(answerThree));
    dispatch(setTenancy(answerFour));
    dispatch(setBroadcast(answerFive));
    dispatch(setLab(answerSix));
  }

  const title = 'General Building Information';
  const Q1 = <p>What is your <b>client&apos;s name?</b></p>;
  const Q2 = <p>What is the <b>project&apos;s name?</b></p>;
  const Q3 = <p>Which <b> units </b> should we use to measure the space? </p>;
  const Q4 = <p>Is this space a <b> multi-tenant </b> or <b> single-tenant? </b> </p>;
  const Q5 = <p>Is this space a <b> broadcast </b> studio?</p>;
  const Q6 = <p>Does this program include any <b> lab </b> spaces?</p>;
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

          <TextQuestion 
            question={Q2}
            label='Please enter the name of your project'
            answerHandler={(x) => setAnswerTwo(x)}
            storedValue={answerTwo}
          />
          <TogQuest 
            question={Q3}
            answers={[ 'Metric', 'Imperial']}
            answerHandler={(x) => setAnswerThree(x)}
            storedValue={answerThree}
          />

          <TogQuest 
            question={Q4}
            answers={[ 'Single', 'Multi']}
            answerHandler={(x) => setAnswerFour(x)}
            storedValue={answerFour}
          />

          <TogQuest 
            question={Q5}
            answers={[ 'Yes', 'No']}
            answerHandler={(x) => setAnswerFive(x)}
            storedValue={answerFive}
          />

          <TogQuest 
            question={Q6}
            answers={[ 'Yes', 'No']}
            answerHandler={(x) => setAnswerSix(x)}
            storedValue={answerSix}
          />
        </div>  
      </div>
      
    </ProjectInformationPage>
  );
}

export default BuildingInformation;
