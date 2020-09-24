import React from 'react';
import './pageLayout.css';

export const PageLayout = ({ children, extraClass }) => (
  <div className={`main-page ${extraClass}`}>{children}</div>
);
