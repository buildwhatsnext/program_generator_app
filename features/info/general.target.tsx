import React from 'react';

import QnA from '../../components/question';
import TextInputBox from '../../components/info/input';
import { DirectionalButton, BackButton } from '../../components/buttons/navigation';
import { ROUTES } from '../../constants/routes';

import styles from './general.module.scss';

function TargetMetric () {

  const Q1 = (
    <p>
      What's the
      <em> target circulation factor? </em>
    </p>
  );

  const Q2 = (
    <p>
      What's the
      <em> target planning factor </em>
    </p>
  );

  const Q3 = (
    <p>
      what's the
      <em> target area per workseat </em>
    </p>
  );

  const Q4 = (
    <p>
      If you have it, what are the
      <em> target workseats? </em>
    </p>
  );


  return (

    <div className={styles.page}>

      <div className={styles.page__logo}>
        <p>hlw</p>
        <p>Program Dashboard</p>
        <div className={styles.page__logo__sub}>
          <p>The Silmarillion Incorporated</p>
        </div>
      </div>

      <div className={styles.page__title}>
        <h2>Target Metrics</h2>
      </div>

      <div className={styles.page__content}>

        <QnA
          question={Q1}
          answers={[
            <TextInputBox content="Enter the target circulation factor (%)"/>
          ]}
        />

        <div>
          -
        </div>

        <QnA
          question={Q2}
          answers={[
            <TextInputBox content="Enter the target planning factor (%)"/>
          ]}
        />

        <div>
          -
        </div>

        <QnA
          question={Q3}
          answers={[
            <TextInputBox content="Enter the target area per workseat (%)"/>
          ]}
        />

        <div>
          -
        </div>

        <QnA
          question={Q4}
          answers={[
            <TextInputBox content="Enter the total area of the space"/>
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

export default TargetMetric;
