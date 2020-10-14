import React from 'react';

import QnA from '../../components/question';
import TextInputBox from '../../components/info/input';
import { DirectionalButton, BackButton } from '../../components/buttons/navigation';
import { ROUTES } from '../../constants/routes';

import { Page } from '../../components/pages/page';

import styles from './general.module.scss';

function TargetMetric () {

  const Q1 = <p>What's the <em> target circulation factor? </em> </p>;
  const Q2 = <p>What's the <em> target planning factor? </em> </p>;
  const Q3 = <p>What's the <em> target area per workseat </em> </p>;
  const Q4 = <p>If you have it, what are the <em> target workseats </em> ?</p>;
  const next = ROUTES.INFO.CONSTRAINTS;

  return (
    <Page nextRoute={next}>
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
