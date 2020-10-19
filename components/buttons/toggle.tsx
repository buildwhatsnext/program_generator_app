import React from 'react';
import { Button } from '@material-ui/core';

import styles from './toggle.module.scss';

interface IToggleButton {
  content: string;
  active: boolean;
  statusHandler: () => void;
};

export function ToggleButton({ content, active, statusHandler }: IToggleButton) : JSX.Element {
  return !active ? (
    <Button 
      variant="outlined" 
      className={styles.overridebutton}
      onClick={() => statusHandler()}
    >
      {content}
    </Button>
  ) : (
    <Button
      variant="contained"
      color="primary"
      className={styles.overridebutton__activated}
      onClick={() => statusHandler()}
    >
      {content}
    </Button>
  );
}
