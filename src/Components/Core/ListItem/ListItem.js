import React from 'react';
import './listItem.css';

export const ListItem = ({ children }) => (
  <div className="list-item">
    <div className="item-content">{children}</div>
  </div>
);
