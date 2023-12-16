import Google from './context-menu-entries/Google';
import Root from './context-menu-entries/Root';
import Youtube from './context-menu-entries/Youtube';
import YoutubeTrailer from './context-menu-entries/YoutubeTrailer';
import ContextMenuHandler from './handlers/ContextMenuHandler';

const run = () => {
    // Root
    ContextMenuHandler.setRoot(new Root());

    // Google
    ContextMenuHandler.add(new Google());

    // Youtube
    ContextMenuHandler.add(new Youtube());
    ContextMenuHandler.add(new YoutubeTrailer());
};

export default run;
