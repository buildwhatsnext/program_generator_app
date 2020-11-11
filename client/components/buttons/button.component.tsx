import React from 'react';
import { Button } from '@material-ui/core';
import styles from './buttons.module.scss';

export interface IFxButton {
  content?: string;
  handleClick?: () => void;
  customButtonStyle?: string;
  outlined?: boolean;
}

export default function FxButton({content, handleClick, customButtonStyle, outlined}: IFxButton) {
  return outlined 
    ? (
      <div 
        className={customButtonStyle ?? styles.button__typical}
      >
        <Button 
          variant='outlined' 
          onClick={handleClick ?? null} 
          
        >
          <p>{content}</p>
        </Button>
      </div>
    ) : (
      <div 
        className={customButtonStyle ?? styles.button__typical}
      >
        <Button 
          onClick={handleClick ?? null} 
          // className={customButtonStyle ?? styles.button__typical}
        >
          <p>{content}</p>
        </Button>
      </div>
    )
    
}