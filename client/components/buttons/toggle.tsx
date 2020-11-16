import React from 'react';
import { Button } from '@material-ui/core';

import styles from './toggle.module.scss';

interface IToggleButton {
  content: string;
  active: boolean;
  statusHandler: () => void;
};

// TODO: document this function
export function ToggleButton({ content, active, statusHandler }: IToggleButton) : JSX.Element {
  return !active ? (
    <div className={styles.overridebutton}>
      <Button 
        variant="outlined" 
        onClick={() => statusHandler()}
      >
        <p>
          {content}
        </p>
      </Button>
    </div>
  ) : (
    <div className={styles.overridebutton__activated}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => statusHandler()}
      >
        <p>
          {content}
        </p>
      </Button>
    </div>
  );
}
