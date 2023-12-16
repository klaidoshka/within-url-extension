import '../public/styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import run from './Addon.ts';
import App from './components/App.tsx';

// Initiate addon logic
run();

// Render the app
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
