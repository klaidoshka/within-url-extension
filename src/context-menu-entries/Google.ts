import Browser, { Menus, Tabs } from 'webextension-polyfill';

import CheckHandler from '../handlers/CheckHandler';
import ContextMenuEntry from '../models/ContextMenuEntry';

class Google implements ContextMenuEntry {
    onClick: (info: Menus.OnClickData, tab?: Tabs.Tab | undefined) => void;
    onCreate?: (() => void) | undefined;
    properties: Menus.CreateCreatePropertiesType & { id: string };

    constructor() {
        this.onClick = async (info) => {
            const url = `https://www.google.com/search?q=${encodeURIComponent(
                info.selectionText ?? ""
            )}`;

            if (CheckHandler.isExternalTabRequested(info)) {
                await Browser.tabs.create({ url });
            } else {
                await Browser.tabs.update({ url });
            }
        };

        this.properties = {
            id: "within-url-google",
            title: "Google: `%s`",
            icons: {
                16: "icons/google.svg"
            }
        };
    }
}

export default Google;
