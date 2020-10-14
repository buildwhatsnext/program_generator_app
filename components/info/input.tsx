import React from 'react';
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

export default function TextInputBox({content}) {
  // const classes = useStyles();

  return (
    <div className={styles.input}>
      <form noValidate autoComplete="off">
        <TextField className={styles.input__text} id="standard-basic" label={content} />
      </form>
    </div>
  )
}
