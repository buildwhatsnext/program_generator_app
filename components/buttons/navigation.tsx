import React from 'react';
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import FxButton from './button.component';

export type IFxRoutingButton = {
  content: string;
  execute?: (x) => void;
  executableData?: Record<string, unknown>;
  to: string;
  customButtonStyle?: string;
};

export interface IDirectionalButton {
  content: string;
  location: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function FxRoutingButton({
  content,
  execute,
  to,
  executableData,
  customButtonStyle
}: IFxRoutingButton) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    dispatch(execute(executableData));
    router.push(to);
  }

  return execute ? (
    <FxButton 
      content={content} 
      handleClick={handleClick} 
      customButtonStyle={customButtonStyle} 
    />
  ) : (
    <RoutingButton 
      location={to} 
      content={content} 
    />
  );
}

export function RoutingButton({ location, content }: IDirectionalButton) {
  const router = useRouter();

  const handleClick = () => {
    router.push(location);
  }

  return (
    <FxButton
      outlined
      content={content}
      handleClick={handleClick}
    />
  );
}

export function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    router.back()
  }

  return (
    <FxButton
      outlined
      content='Back'
      handleClick={handleClick}
    />
  );
}
