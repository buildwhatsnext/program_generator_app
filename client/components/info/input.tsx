import React, { Ref } from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import styles from './input.module.scss';

const useStyles = makeStyles({
  root : {
    "& .MuiInput-underline:before": {
      borderBottom: '#06038D 3px solid'
    },

    "& .MuiInput-underline &hover": {
      borderBottom: '#06038D 3px solid'
    },

    "& .MuiInput-underline:after": {
      borderBottom: '#06038D 3px solid'
    }
  }
})

interface ITextInput {
  content?: string;
  // ref: Ref<HTMLInputElement>;
  handler: () => void;
  storedValue?: string;
  currentValue?:string;
}

const TextInputBox = React.forwardRef((props : ITextInput , ref : Ref<HTMLInputElement> ) => {
  const { content, handler, storedValue, currentValue } = props;
  const classes = useStyles();

  return (
    <div className={styles.input}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField 
          className={styles.input__text} 
          id="standard-basic" 
          label={content} 
          inputRef={ref} 
          onChange={handler} 
          value={currentValue ?? storedValue}
          InputProps={{
            classes: {
              root: classes.root,
            }
          }}
        />
      </form>
    </div>
  )
});

/**
 * @summary a TextBox which only displays values instead of allowing user input
 * @param {ITextInput} props - same as typical TextInput, @see TextInputBox for more details
 */
export const ReadonlyTextBox = (props: ITextInput) => {
  const { storedValue } = props;

  return (
    <div className={styles.input}>
      <form noValidate autoComplete="off">
        <TextField 
          className={styles.input__text} 
          id="standard-basic" 
          value={storedValue}
        />
      </form>
    </div>
  )
}

export default TextInputBox;