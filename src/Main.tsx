import '../public/styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Browser from 'webextension-polyfill';

import App from './components/App.tsx';
import Google from './context-menu-entries/Google.ts';
import Root from './context-menu-entries/Root.ts';
import Youtube from './context-menu-entries/Youtube.ts';
import YoutubeTrailer from './context-menu-entries/YoutubeTrailer.ts';
import ContextMenuHandler from './handlers/ContextMenuHandler.ts';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

const setup = () => {
    // Root
    ContextMenuHandler.setRoot(new Root());

    // Google
    ContextMenuHandler.add(new Google());

    // Youtube
    ContextMenuHandler.add(new Youtube());
    ContextMenuHandler.add(new YoutubeTrailer());
};

Browser.runtime.onInstalled.addListener(setup);
Browser.runtime.onStartup.addListener(setup);