import React from 'react';
import { IPage, Page } from '../pages/page';

export function TransitionPage({showPanel, panel, children }: IPage) {
  return <Page showPanel={showPanel} panel={panel}>{children}</Page>;
}
