import React, { ReactNode } from 'react';

interface IPage {
  children: ReactNode;
}

export default function Page({children} : IPage) {
  return <div>{children}</div>
}