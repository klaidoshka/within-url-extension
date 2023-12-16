import { Menus, Tabs } from 'webextension-polyfill';

import ContextMenuEntry from '../models/ContextMenuEntry';

class Root implements ContextMenuEntry {
    onClick: (info: Menus.OnClickData, tab?: Tabs.Tab | undefined) => void;
    onCreate?: (() => void) | undefined;
    properties: Menus.CreateCreatePropertiesType & { id: string };

    constructor() {
        this.onClick = () => {};

        this.properties = {
            id: "within-url-root",
            title: "Use selection within..."
        };
    }
}

export default Root;
