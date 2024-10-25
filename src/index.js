// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

// Check if the content is already rendered (by react-snap)
if (rootElement.hasChildNodes()) {
  const root = createRoot(rootElement);
  root.hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
