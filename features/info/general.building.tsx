import React from 'react';
import { useDispatch } from 'react-redux';
import { 
  QuestionAndAnswer as QnA, 
  TextualQuestionAnswerCombo as TextQuestion,
  ToggleQuestionAnswerCombo as TogQuest 
} from '../../components/info/question';
// import ToggleButton from '../../components/buttons/toggle';
// import TextInputBox from '../../components/info/input';
import { ROUTES } from '../../constants/routes';

import { setClient, setUnits, setTenancy } from '../program/program.slice';

import { Page } from '../../components/pages/page';


function BuildingInformation() {
  const dispatch = useDispatch();
  const title = 'General Building Information';
  const Q1 = <p>What is your <b>client's name?</b></p>;
  const Q2 = <p>Which <b> units </b> should we use to measure your space? </p>;
  const Q3 = <p>Is your space a <b> multi-tenant </b> or <b> single-tenant? </b> </p>;
  const Q4 = <p>Is this space a <b> broadcast </b> studio?</p>;
  const Q5 = <p>Does this program include any <b> lab </b> spaces?</p>;
  const next = ROUTES.INFO.CONSTRAINTS;

  return (
    <Page nextRoute={next}>

      <h4>{ title }</h4>

      <TextQuestion 
        question={Q1}
        label='Please enter the name of your client'
        answerHandler={(x) => dispatch(setClient(x))}
      />

      <TogQuest 
        question={Q2}
        answers={[ 'Metric', 'Imperial']}
      />

      <TogQuest 
        question={Q3}
        answers={[ 'Single', 'Multi']}
      />

      <TogQuest 
        question={Q4}
        answers={[ 'Yes', 'No']}
      />

      <TogQuest 
        question={Q5}
        answers={[ 'Yes', 'No']}
      />
      
    </Page>
  );
}

export default BuildingInformation;
