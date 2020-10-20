import React from 'react';
import { useDispatch } from 'react-redux';
import { ROUTES } from '../../constants/routes';
import { Page } from '../../components/pages/page';
import { 
  TextualQuestionAnswerCombo as TextQuestion,
  ToggleQuestionAnswerCombo as TogQuest 
} from '../../components/info/question';
import { 
  setCirculation,
  setPlanning,
  setWorkseatArea,
  setWorkseatTarget
} from '../program/program.slice';

function TargetMetric () {
  const dispatch = useDispatch();
  const title = 'Target Metrics';
  const Q1 = <p>What's the <b> target circulation factor? </b> </p>;
  const Q2 = <p>What's the <b> target planning factor? </b> </p>;
  const Q3 = <p>What's the <b> target area per workseat </b> </p>;
  const Q4 = <p>If you have it, what are the <b> target workseats </b> ?</p>;
  const next = ROUTES.PROGRAM.START;

  return (
    <Page nextRoute={next}>

      <h4>{title}</h4>
      
      <TextQuestion 
        question={Q1}
        label='Enter the target circulation factor (%)'
        answerHandler={(x) => dispatch(setCirculation(x))}
      />

      <TextQuestion 
        question={Q2}
        label='Enter the target planning factor (%)'
        answerHandler={(x) => dispatch(setPlanning(x))}
      />

      <TextQuestion 
        question={Q3}
        label='Enter the target area per workseat'
        answerHandler={(x) => dispatch(setWorkseatArea(x))}
      />

      <TextQuestion 
        question={Q4}
        label='Enter the target for total number of workseats'
        answerHandler={(x) => dispatch(setWorkseatTarget(x))}
      />

    </Page>
  );
};

export default TargetMetric;