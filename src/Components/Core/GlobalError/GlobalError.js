import React from 'react';
import './globalError.css';
import ErrorImage from './error.png';

export const GlobalError = () => (
  <div className="error">
    <img src={ErrorImage} />
  </div>
);
