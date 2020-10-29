import React, { Ref, useRef, useState } from 'react';
import { ToggleButton } from '../buttons/toggle';
import TextInput from './input';

export interface IAnswer {
  label?: string;
  answerHandler?: () => void;
  passedRef?: Ref<HTMLInputElement>;
}

export function TextualAnswer({ answerHandler, label, passedRef }: IAnswer): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  const reporter = () => {
    console.log(inputRef.current.value);
  }

  return passedRef 
    ? <TextualAnswerWithRef label={label ?? ''} answerHandler={answerHandler ?? reporter} ref={passedRef} />
    : <TextInput content={label ?? ''} ref={inputRef} handler={answerHandler ?? reporter}/>;
}

export const TextualAnswerWithRef = React.forwardRef((props: IAnswer, ref: Ref<HTMLInputElement>) => {
  const { answerHandler, label } = props;

  return <TextInput content={label} ref={ref} handler={answerHandler}/>;
});

export interface IToggleAnswer extends IAnswer {
  active: boolean;
}

export const ToggleAnswer : React.FC<IToggleAnswer> = ({ label, active, answerHandler }: IToggleAnswer) => {
  return <ToggleButton content={label} active={active} statusHandler={answerHandler} />
}
