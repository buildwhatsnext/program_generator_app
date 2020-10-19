import React from 'react';

import { QuestionAndAnswer as QnA, Answer } from '../../components/info/question';
import ToggleButton from '../../components/buttons/toggle';
import TextInputBox from '../../components/info/input';
import { DirectionalButton, BackButton } from '../../components/buttons/navigation';
import { ROUTES } from '../../constants/routes';

import { Page } from '../../components/pages/page';

import styles from './general.module.scss';
function BuildingConstraint() {

  const title = 'General Building Constraints'
  const Q1 = <p>What's the <em> total RSF of the space?</em></p>;
  const Q2 = <p>What's the <em> RSF loss factor? </em></p>;
  const Q3 = <p>Is your space a <em> multi-tenant </em> or <em> single-tenant? </em></p>;
  const next = ROUTES.INFO.TARGET;

  return (
    <Page nextRoute={next}>

      <h4>{title}</h4>

      <QnA
        question={Q1}
        answers={[<TextInputBox content={`Enter the total area of the space`}/>]}
      />

      <QnA
        question={Q2}
        answers={[<TextInputBox content={`Enter the target area per workseat`}/>]}
      />

      <QnA
        question={Q1}
        answers={[<TextInputBox content={`Enter the amount of floors`}/>]}
      />
    </Page>
  );
};

export default BuildingConstraint;
