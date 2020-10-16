/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Ref, useRef, useState } from 'react';
import ToggleButton from './buttons/toggle';
import TextInput from './info/input';
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

export interface IAnswer {
  label: string;
  answerHandler?: () => void;
  passedRef?: Ref<HTMLInputElement>;
}

export function TextualAnswer({ answerHandler, label, passedRef }: IAnswer) {
  const inputRef = useRef<HTMLInputElement>(null);

  const reporter = () => {
    console.log(inputRef.current.value);
  }

  return passedRef 
    ? <TextualAnswerWithRef label={label} answerHandler={answerHandler ?? reporter} ref={passedRef} />
    : <TextInput content={label} ref={inputRef} handler={answerHandler ?? reporter}/>;
}

export const TextualAnswerWithRef = React.forwardRef((props: IAnswer, ref: Ref<HTMLInputElement>) => {
  const { answerHandler, label } = props;

  return <TextInput content={label} ref={ref} handler={answerHandler}/>;
})

export interface IClientQuestion {
  question: JSX.Element;
  // answers: Array<JSX.Element>;
};


export function ClientQuestion({question}: IClientQuestion) {
  const label = 'If you have it, please enter the name of your client';
  const [answer, setAnswer] = useState('');
  const answerRef = useRef<HTMLInputElement>(null);

  const handleAnswer = () => {
    setAnswer(answerRef.current.value);
    console.log(answer);
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