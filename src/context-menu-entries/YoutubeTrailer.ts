import Browser, { Menus, Tabs } from 'webextension-polyfill';

import CheckHandler from '../handlers/CheckHandler';
import ContextMenuEntry from '../models/ContextMenuEntry';

class YoutubeTrailer implements ContextMenuEntry {
    onClick: (info: Menus.OnClickData, tab?: Tabs.Tab | undefined) => void;
    onCreate?: (() => void) | undefined;
    properties: Browser.Menus.CreateCreatePropertiesType & { id: string };

    constructor() {
        this.onClick = async (info) => {
            const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(
                info.selectionText ?? ""
            )}+trailer`;

            if (CheckHandler.isExternalTabRequested(info)) {
                await Browser.tabs.create({ url });
            } else {
                await Browser.tabs.update({ url });
            }
        };

        this.properties = {
            id: "within-url-youtube-trailer",
            title: "YouTube Trailer: `%s Trailer`",
            icons: {
                16: "/icons/youtube.svg"
            }
        };
    }
}

export default YoutubeTrailer;
