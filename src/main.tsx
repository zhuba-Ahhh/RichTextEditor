import './index.css';

import { createRoot } from 'react-dom/client';

import React from 'react';
import App from './App';

const showErrorOverlay = (err: Event) => {
  const ErrorOverlay = customElements.get('vite-error-overlay');
  if (!ErrorOverlay) {
    return;
  }
  const overlay = new ErrorOverlay(err);
  const body = document.body;
  if (body !== null) {
    body.appendChild(overlay);
  }
};

window.addEventListener('error', showErrorOverlay);
window.addEventListener('unhandledrejection', ({ reason }) =>
  showErrorOverlay(reason),
);

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
