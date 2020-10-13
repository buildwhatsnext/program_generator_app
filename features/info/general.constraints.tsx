import React from 'react';

import QnA from '../../components/question';
import TextInputBox from '../../components/info/input';
import { DirectionalButton, BackButton } from '../../components/buttons/navigation';
import { ROUTES } from '../../constants/routes';

import styles from './general.module.scss';

function BuildingConstraint() {

  const Q1 = (
    <p>
      What's the
      <em> total RSF of the space? </em>
    </p>
  );

  const Q2 = (
    <p>
      What's the
      <em> RSF loss factor? </em>
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

  return (

    <div className={styles.page}>

      <div className={styles.page__logo}>
        <p>hlw</p>
        <p>Program Dashboard</p>
      </div>

      <div className={styles.page__title}>
        <h2> General Building Constraint</h2>
      </div>

      <div className={styles.page__content}>
        <QnA
          question={Q1}
          answers={[
            <TextInputBox content="Enter the total area of the space"/>
          ]}
        />

        <div>
          -
        </div>

        <QnA
          question={Q2}
          answers={[
            <TextInputBox content="Enter the target area per workseat"/>
          ]}
        />

        <div>
          -
        </div>

        <QnA
          question={Q3}
          answers={[
            <TextInputBox content="Enter the amount of floors"/>
          ]}
        />
      </div>

      <div className={styles.page__navigation}>
        <BackButton />
        <DirectionalButton location={ROUTES.PROGRAM.START} content="Next" />
      </div>
    </div>
  );
};

export default BuildingConstraint;
