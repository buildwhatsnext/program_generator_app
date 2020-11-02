import React, { Ref } from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import styles from './input.module.scss';

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
  storedValue?: string;
}

const TextInputBox = React.forwardRef((props : ITextInput , ref : Ref<HTMLInputElement> ) => {
  const { content, handler, storedValue } = props;

  return (
    <div className={styles.input}>
      <form noValidate autoComplete="off">
        <TextField 
          className={styles.input__text} 
          id="standard-basic" 
          label={content} 
          inputRef={ref} 
          onChange={handler} 
          value={storedValue ?? ''}
        />
      </form>
    </div>
  )
});

export default TextInputBox;