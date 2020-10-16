import React from 'react';

import { QuestionAndAnswer as QnA, Answer } from '../../components/question';
import TextInputBox from '../../components/info/input';
import { ROUTES } from '../../constants/routes';

import { Page } from '../../components/pages/page';

function TargetMetric () {

  const title = 'Target Metrics';
  const Q1 = <p>What's the <em> target circulation factor? </em> </p>;
  const Q2 = <p>What's the <em> target planning factor? </em> </p>;
  const Q3 = <p>What's the <em> target area per workseat </em> </p>;
  const Q4 = <p>If you have it, what are the <em> target workseats </em> ?</p>;
  const next = ROUTES.PROGRAM.START;

  return (
    <Page nextRoute={next}>

      <h4>{title}</h4>
      <QnA
        question={Q1} 
        answers={[<TextInputBox content={`Enter the target circulation factor (%)`}/> ]} 
      />

      <QnA 
        question={Q2} 
        answers={[<TextInputBox content={`Enter the target planning factor (%)`}/> ]} 
      />

      <QnA 
        question={Q3} 
        answers={[<TextInputBox content={`Enter the target area per workseat (%)`}/> ]} 
      />

      <QnA 
        question={Q4} 
        answers={[<TextInputBox content={`Enter the total area of the space`}/> ]} 
      />
    </Page>
  );
};

export default TargetMetric;
