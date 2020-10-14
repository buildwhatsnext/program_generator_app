import React from 'react';
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import styles from './navigation.module.scss';

export function InternalNavigationalButton({
  content,
  execute,
  to,
  executableData,
}: InternalNavBtnProps) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    dispatch(execute(executableData));
    router.push(to);
  }

  return execute ? (
    <Button onClick={handleClick}>
      {content}
    </Button>
  ) : (
    <DirectionalButton location={to} content={content} />
  );
}

export function DirectionalButton({ location, content }: IDirectionalButton) {
  const router = useRouter();

  const handleClick = () => {
    router.push(location);
  }

  return (
    <div className={styles.nextbutton}>
      <Button variant='outlined' onClick={handleClick}>
        {content}
      </Button>
    </div>
  );
}

export function BackButton() {
  const router = useRouter();

  return (
    <div className={styles.backbutton}>
      <Button variant="outlined" onClick={() => router.back()}>
        Back
      </Button>
    </div>
  );
}

export type InternalNavBtnProps = {
  content: string;
  execute?: Function;
  executableData?: Record<string, unknown>;
  to: string;
};

export interface IDirectionalButton {
  content: string;
  location: string;
}
