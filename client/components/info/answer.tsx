import React, { Ref, useRef, useState } from 'react';
import { ToggleButton } from '../buttons/toggle';
import TextInput, { NumberInputBox as NumberInput } from './input';

export interface IAnswer {
  label?: string;
  answerHandler?: (data?: any) => void;
  passedRef?: Ref<HTMLInputElement>;
  storedValue?: string;
  // currentValue?:string;
}

// TODO: document all functions & interfaces in this file

/**
 * @summary if ToggleButton is not active, the buttons' variant state is outlined. Otherwise, if the button gets activated, change the variant to contained with primary color.
 * @param {IToggleButton} props - contains three objects inside which are content, active and statushandler. @see IToggleButton for more details.
 */
export function TextualAnswer({ answerHandler, label, passedRef, storedValue }: IAnswer): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const { value } = inputRef.current ?? { value: null };

  const reporter = () => {
    console.log(value);
  }

  const handleAnswer = () => {
    reporter();
    answerHandler();
  }

  return passedRef 
    ? <TextualAnswerWithRef label={label ?? ''} answerHandler={handleAnswer} ref={passedRef} storedValue={storedValue}/>
    : <TextInput content={label ?? ''} ref={inputRef} handler={handleAnswer} storedValue={storedValue} />;
}

/**
 * @summary if ToggleButton is not active, the buttons' variant state is outlined. Otherwise, if the button gets activated, change the variant to contained with primary color.
 * @param {IToggleButton} props - contains three objects inside which are content, active and statushandler. @see IToggleButton for more details.
 */
export const TextualAnswerWithRef = React.forwardRef((props: IAnswer, ref: Ref<HTMLInputElement>) => {
  const { answerHandler, label, storedValue } = props;

  return <TextInput content={label} ref={ref} handler={answerHandler} storedValue={storedValue}/>;
});

/**
 * @summary if ToggleButton is not active, the buttons' variant state is outlined. Otherwise, if the button gets activated, change the variant to contained with primary color.
 * @param {IToggleButton} props - contains three objects inside which are content, active and statushandler. @see IToggleButton for more details.
 */
export function NumericalAnswer({ answerHandler, label, passedRef, storedValue }: IAnswer): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  // const { value } = (passedRef as React.MutableRefObject<HTMLInputElement>).current ?? { value: null};

  const handleAnswer = (data: string) => {
    answerHandler(data);
  }

  return passedRef 
    ? <NumericalAnswerWithRef label={label ?? ''} answerHandler={handleAnswer} ref={passedRef} storedValue={storedValue}/>
    : <NumberInput content={label ?? ''} ref={inputRef} handler={handleAnswer} storedValue={storedValue} />;
}

/**
 * @summary if ToggleButton is not active, the buttons' variant state is outlined. Otherwise, if the button gets activated, change the variant to contained with primary color.
 * @param {IToggleButton} props - contains three objects inside which are content, active and statushandler. @see IToggleButton for more details.
 */
export const NumericalAnswerWithRef = React.forwardRef((props: IAnswer, ref: Ref<HTMLInputElement>) => {
  NumericalAnswerWithRef.displayName = 'NumericalAnswerWRef';

  const { answerHandler, label, storedValue } = props;
  
  return <NumberInput content={label} ref={ref} handler={answerHandler} storedValue={storedValue}/>;
});

/**
 * @summary if ToggleButton is not active, the buttons' variant state is outlined. Otherwise, if the button gets activated, change the variant to contained with primary color.
 * @param {IToggleButton} props - contains three objects inside which are content, active and statushandler. @see IToggleButton for more details.
 */
export interface IToggleAnswer extends IAnswer {
  active: boolean;
}

/**
 * @summary if ToggleButton is not active, the buttons' variant state is outlined. Otherwise, if the button gets activated, change the variant to contained with primary color.
 * @param {IToggleButton} props - contains three objects inside which are content, active and statushandler. @see IToggleButton for more details.
 */
export const ToggleAnswer : React.FC<IToggleAnswer> = ({ label, active, answerHandler }: IToggleAnswer) => {
  return <ToggleButton content={label} active={active} statusHandler={answerHandler} />
}
