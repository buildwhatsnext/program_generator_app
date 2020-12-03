import React, { Ref } from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import styles from './input.module.scss';
import { formatLargeNumber, formatNumberInput, tryConvertToNumber } from '../../../shared/lib/conversion';

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
  // currentValue?:string;
}

export const NumberInputBox = React.forwardRef((props : ITextInput , ref : Ref<HTMLInputElement> ) => {
  NumberInputBox.displayName = 'NumberInputBox';
  const { content, storedValue, handler } = props;  
  const [ error, setError ] = React.useState(false);

  const handleInput = (data: string) => {
    if(data === null || data === '' || data === undefined) {
      handler(data);
      return;
    }

    console.log(data);
    const formatted = formatNumberInput(data);
    console.log(formatted);
    handler(formatted);
  }

  return (
    <TextInputBox 
      content={content}
      storedValue={storedValue}
      // currentValue={currentValue}
      handler={() => {
        const conv = ref as React.MutableRefObject<HTMLInputElement>;
        handleInput(conv.current.value)
      }} 
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
          className={styles.input__text} 
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