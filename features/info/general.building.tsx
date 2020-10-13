import React from 'react';

import ToggleButton from '../../components/buttons/toggle';
import QnA from '../../components/question';
import TextInputBox from '../../components/info/input';
import { DirectionalButton, BackButton } from '../../components/buttons/navigation';
import { ROUTES } from '../../constants/routes';

import styles from './general.module.scss';


function BuildingInformation() {

  const Q1 = (
    <p>
      What is your client's name?
    </p>
  );

  const Q2 = (
    <p>
      Which
      <em> units </em>
      should we use to measure your space?
    </p>
  );

  const Q3 = (
    <p>
      Is your space a
      <em> multi-tenant </em>
      or
      <em> single-tenant? </em>
    </p>
  );

  const Q4 = (
    <p>
      Is this space a
      <em> broadcast </em>
      studio?
    </p>
  );

  const Q5 = (
    <p>
      Does this program include any
      <em> lab </em>
      spaces?
    </p>
  );



  return (
    <div className={styles.page}>
      <div className={styles.page__logo}>
        <p>hlw</p>
        <p>Program Dashboard</p>
      </div>
      <div className={styles.page__title}>
        <h2>General Space Information</h2>
      </div>
      <div className={styles.page__content}>
        <QnA className={styles.page__content__one}
          question={Q1}
          answers={[
            <TextInputBox content="Please Tell Us Your Client's Name" />
          ]}
        />

        <div>
          -
        </div>

        <QnA
          question={Q2}
          answers={[
            <ToggleButton content="Metric" />,
            <ToggleButton content="Imperial" />,
          ]}
        />

        <div>
          -
        </div>

        <QnA
          question={Q3}
          answers={[
            <ToggleButton content="Multi" />,
            <ToggleButton content="Single" />,
          ]}
        />

        <div>
          -
        </div>

        <QnA
          question={Q4}
          answers={[
            <ToggleButton content="No" />,
            <ToggleButton content="Yes" />,
          ]}
        />

        <div>
          -
        </div>

        <QnA
          question={Q5}
          answers={[
            <ToggleButton content="No" />,
            <ToggleButton content="Yes" />,
          ]}
        />
      </div>

      <div className={styles.page__navigation}>
        <BackButton />
        <DirectionalButton location={ROUTES.INFO.CONSTRAINTS} content="Next" />
      </div>
    </div>
  );
}

export default BuildingInformation;
