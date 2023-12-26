import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/styles.css';

import App from './components/App.js';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);