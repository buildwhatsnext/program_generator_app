import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES } from '../../../shared/constants/routes';
import { Page } from '../../components/pages/page';
import { 
  TextualQuestionAnswerCombo as TextQuestion,
  NumericalQuestionAnswerCombo as NumberQuestion,
} from '../../components/info/question';
import { 
  setRsf,
  setFloorCount,
  selectOverview
} from './project.slice';
import { updateBuildingArea } from '../../../shared/lib/updaters';
import styles from '../../components/transition/section.module.scss';
import { IRestorableState } from '../../components/IRestorableState';
import ProjectInformationPage from './page.project';

/**
 TODO: make sure questions 2 & 3 can only accept number values and write tests to confirm it
 TODO: document this function
 * @param props 
 */
function BuildingConstraint(props: IRestorableState) {
  const dispatch = useDispatch();
  const building = useSelector(selectOverview);

  const [answerOne, setAnswerOne] = React.useState<string>(null);
  const [answerTwo, setAnswerTwo] = React.useState<string>(null);
  const [answerThree, setAnswerThree] = React.useState<string>(null);

  const passToStore = () => {
    dispatch(setRsf(answerOne));
    dispatch(updateBuildingArea(answerTwo));
    dispatch(setFloorCount(answerThree));
  }

  const restoreState = () => {
    const { areaGross, areaNet, floors } = building;

    setAnswerOne(areaGross)
    setAnswerTwo(areaNet);
    setAnswerThree(floors);
  }

  useEffect(() => {
    if(props.hasPrevState) {
      restoreState();
    }

    return () => {
      console.log('Cleaning up the subscription');
    }
  },[props.hasPrevState, props.prevState])

  const title = 'General Building Constraints'
  const Q1 = <p>What&apos;s the <b> total area of the space?</b></p>;
  const Q1Label = `Enter the total area of the space`;
  const Q2AreaType = building?.units?.toLowerCase() === 'metric' ? 'usable' : 'net';
  const Q2 = <p>What&apos;s the <b> {Q2AreaType} area</b> of the space?</p>;
  const Q2Label = `Enter the net area of the space`;
  const Q3 = <p>How many <b>floors</b> are there in this space?</p>;
  const Q3Label = `Enter the amount of floors`;
  const next = ROUTES.INFO.TARGET;

  return (
    <ProjectInformationPage nextRoute={next} navFx={passToStore}>
      <div className={styles.section__questions}>
        <div className={styles.section__questions__title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.section__questions__content}>

          <NumberQuestion 
            question={Q1}
            label={Q1Label}
            answerHandler={(x) => setAnswerOne(x)}
            storedValue={answerOne}
          />

          <NumberQuestion 
            question={Q2}
            label={Q2Label}
            answerHandler={(x) => setAnswerTwo(x)}
            storedValue={answerTwo}
            limit={answerOne}
          />

          <NumberQuestion 
            question={Q3}
            label={Q3Label}
            answerHandler={(x) => setAnswerThree(x)}
            storedValue={answerThree}
          />
        </div>
      </div>
    </ProjectInformationPage>
  );
};

export default BuildingConstraint;
