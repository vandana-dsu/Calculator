// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // You can create this file for global styles if needed
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
