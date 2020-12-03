import React, { Ref, useRef, useState } from 'react';
import { ToggleButton } from '../buttons/toggle';
import TextInput, { NumberInputBox as NumberInput } from './input';

export interface IAnswer {
  label?: string;
  answerHandler?: (data?: any) => void;
  storedValue?: string;
}

export interface INumberAnswer extends IAnswer {
  limit?: string;
}

// TODO: document all functions & interfaces in this file

/**
 * @summary if ToggleButton is not active, the buttons' variant state is outlined. Otherwise, if the button gets activated, change the variant to contained with primary color.
 * @param {IToggleButton} props - contains three objects inside which are content, active and statushandler. @see IToggleButton for more details.
 */
export const TextualAnswer = React.forwardRef((props: IAnswer, ref: Ref<HTMLInputElement>) => {
  TextualAnswer.displayName = 'TextualAnswer';
  const { answerHandler, label, storedValue } = props;

  return <TextInput content={label} ref={ref} handler={answerHandler} storedValue={storedValue}/>;
});

/**
 * @summary if ToggleButton is not active, the buttons' variant state is outlined. Otherwise, if the button gets activated, change the variant to contained with primary color.
 * @param {IToggleButton} props - contains three objects inside which are content, active and statushandler. @see IToggleButton for more details.
 */
export const NumericalAnswer = React.forwardRef((props: INumberAnswer, ref: Ref<HTMLInputElement>) => {
  NumericalAnswer.displayName = 'NumericalAnswer';
  const { answerHandler, label, storedValue, limit } = props;
  
  return <NumberInput content={label} ref={ref} handler={answerHandler} storedValue={storedValue} limit={limit} />;
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
