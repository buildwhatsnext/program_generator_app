import React from 'react';

import QnA from '../../components/question';
import ToggleButton from '../../components/buttons/toggle';
import TextInputBox from '../../components/info/input';
import { ROUTES } from '../../constants/routes';

import { Page } from '../../components/pages/page';


function BuildingInformation() {

  const Q1 = <p>What is your client's name?</p>;
  const Q2 = <p>Which <em> units </em> should we use to measure your space? </p>;
  const Q3 = <p>Is your space a <em> multi-tenant </em> or <em> single-tenant? </em> </p>;
  const Q4 = <p>Is this space a <em> broadcast </em> studio?</p>;
  const Q5 = <p>Does this program include any <em> lab </em> spaces?</p>;
  const next = ROUTES.INFO.CONSTRAINTS;

  return (
    <Page nextRoute={next}>
      <QnA
        question={Q1}
        answers={[<TextInputBox content={`Please Tell Us Your Client's Name`}/>]}
      />

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
          <ToggleButton content="Metric" />,
          <ToggleButton content="Imperial" />,
        ]}
      />

      <QnA
        question={Q4}
        answers={[
          <ToggleButton content="Metric" />,
          <ToggleButton content="Imperial" />,
        ]}
      />

      <QnA
        question={Q5}
        answers={[
          <ToggleButton content="Metric" />,
          <ToggleButton content="Imperial" />,
        ]}
      />
    </Page>
  );
}

export default BuildingInformation;
