/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { INamedValue, NamedValue } from './NamedValue';

export interface IDispatchable {
  execute?: (x) => void;
  executableData?: any;
}

export interface IRoutable {
  location: string;
}

export interface IDispatchableText extends IDispatchable, IRoutable, INamedValue {}

export const DispatchableText : React.FC<IDispatchableText> = (props: IDispatchableText) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    execute,
    executableData,
    location,
  } = props;

  const handleClick = () => {
    dispatch(execute(executableData));
    router.push(location);
  }

  return (
    <div onClick={handleClick} role='link' >
      <NamedValue 
        {...props}
      />
    </div>
  )
}