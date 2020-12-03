import React, { Ref, useEffect, useRef, useState } from 'react';
import { TextualAnswer, ToggleAnswer, NumericalAnswer } from './answer';
import styles from './question.module.scss';

export interface ITextualQuestion {
  question: JSX.Element;
  label: string;
  answerHandler?: (value) => void;
  storedValue?: string;
};

export interface INumericalQuestion extends ITextualQuestion {
  limit?: number;
}

export function TextualQuestionAnswerCombo({ question, label, answerHandler, storedValue }: ITextualQuestion) {
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
          ref={answerRef}
          storedValue={storedValue}
        />
      </div>
    </div>
  );
}

export function NumericalQuestionAnswerCombo({ question, label, answerHandler, storedValue, limit }: INumericalQuestion) {
  const answerRef = useRef<HTMLInputElement>(null);

  const handleAnswer = (data: string) => {
    answerHandler(data);
  }

  return (
    <div className={styles.QnA}>
      <div className={styles.QnA__question}>{question}</div>
      <div className={styles.QnA__answer}>
        <NumericalAnswer 
          answerHandler={handleAnswer}
          label={label}
          ref={answerRef}
          storedValue={storedValue}
          limit={limit}
        />
      </div>
    </div>
  );
}

export interface IToggleQuestion {
  question: JSX.Element;
  answerHandler: (data) => void;
  answers: string[];
  storedValue?:string;
}

export function ToggleQuestionAnswerCombo({ question, answerHandler, answers, storedValue }: IToggleQuestion) {
  const [ currentAnswer, setAnswer ] = useState(storedValue);

  const handler = (answer: string) => {
    if(currentAnswer === answer )
      answer = '';

    setAnswer(answer);
    answerHandler(answer);
  }

  useEffect(() => {
    setAnswer(storedValue);
  }, [storedValue])

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
