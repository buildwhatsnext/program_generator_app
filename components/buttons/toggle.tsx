import React, { useState } from 'react';
import { Button } from '@material-ui/core';

function ToggableButton(props: ToggableButtonProps) {
  const [active, setActive] = useState(false);
  const { content } = props;

  return !active ? (
    <Button width="50px" variant="outlined" onClick={() => setActive(!active)}>
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