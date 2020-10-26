import React from 'react';
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import FxButton, {IFxButton} from './button.component';

export interface IFxRoutingButton extends IFxButton {
  location: string;
}

export function FxRoutingButton({ location, content, customButtonStyle, outlined }: IFxRoutingButton) {
  const router = useRouter();

  const handleClick = () => {
    router.push(location);
  }

  return (
    <FxButton
      outlined={outlined}
      content={content}
      handleClick={handleClick}
      customButtonStyle={customButtonStyle} 
    />
  );
}

export function BackButton({customButtonStyle}: IFxButton) {
  const router = useRouter();

  const handleClick = () => {
    router.back()
  }

  return (
    <FxButton
      outlined
      content='Back'
      handleClick={handleClick}
      customButtonStyle={customButtonStyle} 
    />
  );
}

export interface IDFxRoutingButton extends IFxRoutingButton {
  execute?: (x) => void;
  executableData?: Record<string, unknown>;
};

export function DFxRoutingButton({
  content,
  execute,
  executableData,
  location,
  customButtonStyle
}: IDFxRoutingButton) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    dispatch(execute(executableData));
    router.push(location);
  }

  return execute ? (
    <FxRoutingButton 
      content={content} 
      handleClick={handleClick}
      location={location} 
      customButtonStyle={customButtonStyle} 
    />
  ) : (
    <FxRoutingButton 
      location={location} 
      content={content} 
      customButtonStyle={customButtonStyle} 
    />
  );
}


