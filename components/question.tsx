import React, { useState } from 'react';
import ToggleButton from './buttons/toggle';
import styles from './question.module.scss';

export type QnAProps = {
  question: JSX.Element;
  answers: Array<JSX.Element>;
};

export function QuestionAndAnswer(props: QnAProps) {
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
    <div className={styles.QnA}>
      <div className={styles.QnA__question}>{question}</div>
      <div className={styles.QnA__answer}>{answerCollection}</div>
    </div>
  );
}

export function Answer({ answerHandler, children }: IAnswer) {
  return (
    <>
      { children }
    </>
  )
}

export interface IAnswer {
  // asnwerValue: object;
  answerHandler: () => void;
  children: JSX.Element;
}

