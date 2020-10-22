import React from 'react';
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import navStyles from './navigation.module.scss';
import buttonStyles from './buttons.module.scss';

export type InternalNavBtnProps = {
  content: string;
  execute?: (x) => void;
  executableData?: Record<string, unknown>;
  to: string;
};

export interface IDirectionalButton {
  content: string;
  location: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
      <p className={buttonStyles.panel__button}>{content}</p>
      {/* <div className={styles.circle}></div> */}
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
    <div className={navStyles.nav__next}>
      <Button variant='outlined' onClick={handleClick}>
        <p>
          {content}
        </p>
      </Button>
    </div>
  );
}

export function BackButton() {
  const router = useRouter();

  return (
    <div className={navStyles.nav__back}>
      <Button variant="outlined" onClick={() => router.back()}>
        <p>Back</p>
      </Button>
    </div>
  );
}
