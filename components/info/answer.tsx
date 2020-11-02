import React, { Ref, useRef, useState } from 'react';
import { ToggleButton } from '../buttons/toggle';
import TextInput from './input';

export interface IAnswer {
  label?: string;
  answerHandler?: () => void;
  passedRef?: Ref<HTMLInputElement>;
  storedValue?: string;
  currentValue?:string;
}

export function TextualAnswer({ answerHandler, label, passedRef, storedValue }: IAnswer): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const { value } = inputRef.current ?? { value: null };

  const reporter = () => {
    console.log(value);
  }

  return passedRef 
    ? <TextualAnswerWithRef currentValue={value} label={label ?? ''} answerHandler={answerHandler ?? reporter} ref={passedRef} storedValue={storedValue}/>
    : <TextInput currentValue={value} content={label ?? ''} ref={inputRef} handler={answerHandler ?? reporter} storedValue={storedValue} />;
}

export const TextualAnswerWithRef = React.forwardRef((props: IAnswer, ref: Ref<HTMLInputElement>) => {
  const { answerHandler, label, storedValue, currentValue } = props;

  return <TextInput currentValue={currentValue} content={label} ref={ref} handler={answerHandler} storedValue={storedValue}/>;
});

export interface IToggleAnswer extends IAnswer {
  active: boolean;
}

export const ToggleAnswer : React.FC<IToggleAnswer> = ({ label, active, answerHandler }: IToggleAnswer) => {
  return <ToggleButton content={label} active={active} statusHandler={answerHandler} />
}
