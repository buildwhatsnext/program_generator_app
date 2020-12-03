/* eslint-disable no-shadow */
import React, { Ref, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import styles from './input.module.scss';
import { formatNumberInput, isInputOverLimit } from '../../../shared/lib/conversion';
import { UnacceptableInputError } from '../../../shared/lib/errors';

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
  error?: boolean;
  handler: (x?: any) => void;
  storedValue?: string;
}

interface INumberInput extends ITextInput {
  limit?: string;
}

export const NumberInputBox = React.forwardRef((props : INumberInput , ref : Ref<HTMLInputElement> ) => {
  NumberInputBox.displayName = 'NumberInputBox';
  const { content, storedValue, handler, limit } = props;  
  const [ error, setError ] = React.useState(false);
  const [ errorMessage, setErrorMessage ] = React.useState(null);

  const evaluateInput = (input: string, limit: string) => {
    if(isInputOverLimit(input, limit)) {
      setErrorState('This value is over the limit!');
    } else {
      clearErrorState();
    }
  }

  const handleInput = () => {
    const conv = ref as React.MutableRefObject<HTMLInputElement>;
    const data = conv.current.value;

    if(error)
      clearErrorState()

    if(data === null || data === '' || data === undefined) {
      handler(data);
      return;
    }

    try {
      const formatted = formatNumberInput(data);
      evaluateInput(formatted, limit);
      handler(formatted);
    } catch (error) {
      if(!(error instanceof UnacceptableInputError)) 
        throw error;
      // setErrorState(error.message);
    }
  }

  const clearErrorState = () => {
    setError(false);
    setErrorMessage(null);
  }

  const setErrorState = (msg: string) => {
    setError(true);
    setErrorMessage(msg);
  }

  useEffect(() => {
    evaluateInput(storedValue, limit)
  }, [limit])

  return (
    <TextInputBox 
      content={errorMessage ?? content}
      storedValue={storedValue}
      handler={handleInput} 
      error={error} 
      ref={ref} 
    /> 
  )
})

const TextInputBox = React.forwardRef((props : ITextInput , ref : Ref<HTMLInputElement> ) => {
  TextInputBox.displayName = 'TextInputBox';
  const { content, handler, storedValue, error } = props;
  const classes = useStyles();

  return (
    <div className={styles.input}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField 
          className={
            error 
              ? `${styles.input__text} ${styles.input__text__error}` 
              : `${styles.input__text}`
            } 
          id="standard-basic" 
          label={content} 
          inputRef={ref} 
          onChange={handler} 
          value={ storedValue }
          error={error}
          InputProps={{
            classes: {
              root: classes.root,
            }
          }}
          InputLabelProps={{
            shrink: (storedValue !== null && storedValue !== '' && storedValue !== undefined)
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