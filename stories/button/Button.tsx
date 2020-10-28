/* eslint-disable react/prop-types */
import React from 'react';
import './button.css';

export interface ButtonProps {

  primary?: boolean;
  backgroundColor?: string;
  nextlabel?: string;
  prevlabel?: string;
  size?: string;
  onClick?: () => void;

}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  backgroundColor,
  nextlabel,
  prevlabel,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <div>
      <button
        type="button"
        className={['storybook-button', mode].join(' ')}
        style={{ backgroundColor }}
        {...props}
      >
        {prevlabel}
      </button>
      <button
        type="button"
        className={['storybook-button', mode].join(' ')}
        style={{ backgroundColor }}
        {...props}
      >
        {nextlabel}
      </button>
    </div>
  );
};