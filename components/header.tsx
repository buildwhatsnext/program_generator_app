import React from 'react';
import { useSelector } from 'react-redux';
import { selectProject } from '../features/project/project.slice';
import { selectSetting } from '../features/settings/settings.slice';

export function ProgramHeader() {
  const { client } = useSelector(selectProject);
  const { application, company } = useSelector(selectSetting);

  return (
    <div className="header">
      <div className="header__company">
        <h1>{company}</h1>
      </div>
      <div className="header__program">
        <h2>{application}</h2>
      </div>
      <div className="header__client">
        <p className="header__client__name">{client}</p>
      </div>
    </div>
  );
}

interface IHeader {
  companyName: string;
  program: string;
  clientName: string;
};
