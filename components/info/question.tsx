/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Ref, useRef, useState } from 'react';
import { TextualAnswer, ToggleAnswer } from './answer';
import styles from './question.module.scss';

export interface ITextualQuestion {
  question: JSX.Element;
  label: string;
  answerHandler?: (value) => void;
};

export function TextualQuestionAnswerCombo({ question, label, answerHandler }: ITextualQuestion) {
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

export interface IToggleQuestion {
  question: JSX.Element;
  answerHandler: (data) => void;
  answers: string[];
}

export function ToggleQuestionAnswerCombo({ question, answerHandler, answers }: IToggleQuestion) {
  const [ currentAnswer, setAnswer ] = useState('');

  const handler = (answer: string) => {
    if(currentAnswer === answer )
      answer = '';

    setAnswer(answer);
    answerHandler(answer);
  }

  const answerCollection = answers.map((answer) => (
    <ToggleAnswer 
      key={answer}
      label={answer} 
      active={ currentAnswer === answer } 
      answerHandler={() => handler(answer)} 
    />
  ));

  return (
    <div className={styles.QnA}>
      <div className={styles.QnA__question}>{question}</div>
      <div className={styles.QnA__answer}>{answerCollection}</div>
    </div>
  );
}
