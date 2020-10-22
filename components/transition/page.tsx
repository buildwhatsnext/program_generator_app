import React from 'react';
import { IPage, Page } from '../pages/page';

export function TransitionPage({showPanel, panel, nav, children, extraNavClasses }: IPage) {
  return <Page showPanel={showPanel} panel={panel} nav={nav} extraNavClasses={extraNavClasses}>{children}</Page>;
}
