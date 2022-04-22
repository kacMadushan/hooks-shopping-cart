import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyle from './utils/GlobalStyle';

const container = document.getElementById('root');
const appRoot = createRoot(container);

appRoot.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)