import React, { useState } from 'react';
import ToggleButton from './buttons/toggle';
// import styles, { textinputbox } from '../features/building/styles.building.info.scss';

function QuestionAndAnswer(props: QnAProps) {
  const [answered, toggleAnswer] = useState(false);
  const [selectedAnswer, setAnswer] = useState(null);
  const { question, answers } = props;

  const answerCollection = answers.map((answer, i) => (
    <span key={i} onClick={() => handleclicks(i)}>{answer}</span>
  ));

  function handleclicks(i) {
    console.log(i);
  }

  return (
    <div>
      <div>{question}</div>
      <div>{answerCollection}</div>
    </div>
    // <div className={styles.qna}>
    //   <div className={styles.questions}>{question}</div>
    //   <div className={styles.answers}>{answerCollection}</div>
    // </div>
  );
}

type QnAProps = {
  question: JSX.Element;
  answers: Array<JSX.Element>;
};

export default QuestionAndAnswer;

/**
 key={i.toString} will tell you which button (index) has been clicked from array
 we can use that information to let 'Question know' that a button has been clicked

 1. when someone clicks a button
 2. console.log which index/button{text} is has been clicked

 */
