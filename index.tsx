
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './src/index.css';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Critical Error: Element with ID 'root' not found in index.html");
  document.body.innerHTML = "<div style='color:red; padding:20px;'>Error: Root element not found. Please check index.html</div>";
}
