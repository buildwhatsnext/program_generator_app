import React from 'react';

import { QuestionAndAnswer as QnA, TextualAnswer, ClientQuestion } from '../../components/question';
import ToggleButton from '../../components/buttons/toggle';
import TextInputBox from '../../components/info/input';
import { ROUTES } from '../../constants/routes';

import { setClient, setUnits, setTenancy } from '../program/program.slice';

import { Page } from '../../components/pages/page';


function BuildingInformation() {

  const title = 'General Building Information';
  const Q1 = <p>What is your <em>client's name?</em></p>;
  const Q2 = <p>Which <em> units </em> should we use to measure your space? </p>;
  const Q3 = <p>Is your space a <em> multi-tenant </em> or <em> single-tenant? </em> </p>;
  const Q4 = <p>Is this space a <em> broadcast </em> studio?</p>;
  const Q5 = <p>Does this program include any <em> lab </em> spaces?</p>;
  const next = ROUTES.INFO.CONSTRAINTS;

  return (
    <Page nextRoute={next}>

      <h4>{ title }</h4>

      <ClientQuestion 
        question={Q1}
      />
      {/* <QnA
        question={Q1}
        answers={[<TextualAnswer label='Please enter the name of the client' />]}
      /> */}

      <QnA
        question={Q2}
        answers={[
          <ToggleButton content="Metric" />,
          <ToggleButton content="Imperial" />,
        ]}
      />

      <QnA
        question={Q3}
        answers={[
          <ToggleButton content="Single" />,
          <ToggleButton content="Multi" />,
        ]}
      />

      <QnA
        question={Q4}
        answers={[
          <ToggleButton content="Yes" />,
          <ToggleButton content="No" />,
        ]}
      />

      <QnA
        question={Q5}
        answers={[
          <ToggleButton content="Yes" />,
          <ToggleButton content="No" />,
        ]}
      />
    </Page>
  );
}

export default BuildingInformation;
