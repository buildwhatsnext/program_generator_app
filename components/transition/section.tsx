import React from 'react';
import { DirectionalButton, BackButton } from '../buttons/navigation';

export function TransitionSection({
  desc,
  fwdBtnText = "Next",
  to,
}: ISection) {
  return (
    <div className="section">
      <p className="section__desc">{desc}</p>
      <div className="section__nav">
        <DirectionalButton location={to} content={fwdBtnText} />
        <BackButton />
      </div>
    </div>
  );
}

interface ISection {
  desc: string;
  fwdBtnText?: string;
  to: string;
};
