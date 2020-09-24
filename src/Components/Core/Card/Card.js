import React from 'react';
import './card.css';

export const Card = ({ title, extraClass, children }) => (
  <div className={`card ${extraClass}`}>
    <div className="card-info title">{title}</div>
    <div className="card-info content">{children}</div>
  </div>
);
