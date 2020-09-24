import React from 'react';
import './title.css';

export const Title = ({ text, extraClass }) => (
  <span className={`page-title ${extraClass}`}>{text}</span>
);
