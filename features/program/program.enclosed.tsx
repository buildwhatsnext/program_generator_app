import React from 'react';
import { Page } from '../../components/pages/page';
import { ROUTES } from '../../constants/routes';

export function EnclosedWorkspaces() {
  return (
    <Page nextRoute={ ROUTES.PROGRAM.UPDATE } />
  )
}