import React from 'react';
import { useDispatch } from 'react-redux';
import { ROUTES } from '../../constants/routes';
import { Page } from '../../components/pages/page';
import { 
  TextualQuestionAnswerCombo as TextQuestion,
} from '../../components/info/question';
import { 
  setRsf,
  setLossFactor,
  setFloorCount
} from '../program/program.slice';
import styles from '../../components/transition/section.module.scss';


function BuildingConstraint() {
  const dispatch = useDispatch();
  const title = 'General Building Constraints'
  const Q1 = <p>What&apos;s the <b> total RSF of the space?</b></p>;
  const Q1Label = `Enter the total area of the space`;
  const Q2 = <p>What&apos;s the <b> RSF loss factor? </b></p>;
  const Q2Label = `Enter the loss factor`;
  const Q3 = <p>How many <b>floors</b> are there in this space</p>;
  const Q3Label = `Enter the amount of floors`;
  const next = ROUTES.INFO.TARGET;

  return (
    <Page nextRoute={next}>
      <div className={styles.section__questions}>
        <div className={styles.section__questions__title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.section__questions__content}>
          <TextQuestion 
            question={Q1}
            label={Q1Label}
            answerHandler={(x) => dispatch(setRsf(x))}
          />

          <TextQuestion 
            question={Q2}
            label={Q2Label}
            answerHandler={(x) => dispatch(setLossFactor(x))}
          />

          <TextQuestion 
            question={Q3}
            label={Q3Label}
            answerHandler={(x) => dispatch(setFloorCount(x))}
          />
        </div>
      </div>
    </Page>
  );
};

export default BuildingConstraint;
