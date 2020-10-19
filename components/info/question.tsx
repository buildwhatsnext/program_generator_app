/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Ref, useRef, useState } from 'react';
import ToggleButton from '../buttons/toggle';
import { TextualAnswer } from './answer';
import styles from './question.module.scss';

export type QnAProps = {
  question: JSX.Element;
  answers: Array<JSX.Element>;
};

export function QuestionAndAnswer(props: QnAProps) {
  function handleclicks(i) {
    console.log(i);
  }

  const [answered, toggleAnswer] = useState(false);
  const [selectedAnswer, setAnswer] = useState(null);
  const { question, answers } = props;

  const answerCollection = answers.map((answer, i) => (
    <span key={i} onClick={() => handleclicks(i)}>{answer}</span>
  ));


  return (
    <div className={styles.QnA}>
      <div className={styles.QnA__question}>{question}</div>
      <div className={styles.QnA__answer}>{answerCollection}</div>
    </div>
  );
}

export interface IClientQuestion {
  question: JSX.Element;
  label: string;
  answerHandler?: (value) => void;
};

export function TextualQuestionAnswerCombo({ question, label, answerHandler }: IClientQuestion) {
  // const [answer, setAnswer] = useState('');
  const answerRef = useRef<HTMLInputElement>(null);

  const handleAnswer = () => {
    const newAnswer = answerRef.current.value;
    answerHandler(newAnswer);
  }

  return (
    <div className={styles.QnA}>
      <div className={styles.QnA__question}>{question}</div>
      <div className={styles.QnA__answer}>
        <TextualAnswer 
          answerHandler={handleAnswer}
          label={label}
          passedRef={answerRef}
        />
      </div>
    </div>
  );
}