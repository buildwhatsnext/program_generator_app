import React from 'react';
import { useDispatch } from 'react-redux';
import { QuestionAndAnswer as QnA, TextualQuestion } from '../../components/info/question';
import ToggleButton from '../../components/buttons/toggle';
import TextInputBox from '../../components/info/input';
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

      <TextualQuestion 
        question={Q1}
        label='Please enter the name of your client'
        answerHandler={(x) => dispatch(setClient(x))}
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
