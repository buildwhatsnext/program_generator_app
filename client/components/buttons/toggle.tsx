import React from 'react';
import { Button } from '@material-ui/core';

import styles from './toggle.module.scss';

interface IToggleButton {
  content: string;
  active: boolean;
  statusHandler: () => void;
};

// TODO: document this function

/**
 * @summary if ToggleButton is not active, the buttons' variant state is outlined. Otherwise, if the button gets activated, change the variant to contained with primary color.
 * @param {IToggleButton} props - contains three objects inside which are content, active and statushandler. @see IToggleButton for more details.
 */
export function ToggleButton({ content, active, statusHandler }: IToggleButton) : JSX.Element {
  return !active ? (
    <div className={styles.overridebutton}>
      <Button 
        variant="outlined" 
        onClick={() => statusHandler()}
      >
        <p>
          {/* {content} */}
          example
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
          {/* {content} */}
          not really
        </p>
      </Button>
    </div>
  );
}
