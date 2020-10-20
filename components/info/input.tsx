import React, { Ref } from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import styles from './input.module.scss';
import { colors } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

interface ITextInput {
  content: string;
  // ref: Ref<HTMLInputElement>;
  handler: () => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const TextInputBox = React.forwardRef((props : ITextInput , ref : Ref<HTMLInputElement> ) => {
  const { content, handler } = props;

  return (
    <div className={styles.input}>
      <form noValidate autoComplete="off">
        <TextField 
          className={styles.input__text} 
          id="standard-basic" 
          label={content} 
          inputRef={ref} 
          onChange={handler} 
        />
      </form>
    </div>
  )
});

export default TextInputBox;