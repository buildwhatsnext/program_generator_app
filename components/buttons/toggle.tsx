import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import styles from './toggle.module.scss';

function ToggableButton(props: ToggableButtonProps) {
  const [active, setActive] = useState(false);
  const { content } = props;

  return !active ? (
    <Button variant="outlined" onClick={() => setActive(!active)}>
      {content}
    </Button>
  ) : (
    <Button
      variant="contained"
      color="primary"
      onClick={() => setActive(!active)}
    >
      {content}
    </Button>
  );
}

type ToggableButtonProps = {
  content: string;
};

export default ToggableButton;