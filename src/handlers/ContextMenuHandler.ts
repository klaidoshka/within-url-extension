import Browser from 'webextension-polyfill';

import ContextMenuEntry from '../models/ContextMenuEntry';

class ContextMenuHandler {
    private static _entryRoot: ContextMenuEntry;
    private static _entries: ContextMenuEntry[] = [];

    public static add = (entry: ContextMenuEntry) => {
        if (!ContextMenuHandler._entryRoot) {
            throw new Error("Root entry not set yet");
        }

        Browser.contextMenus.create(
            {
                ...entry.properties,
                parentId: ContextMenuHandler._entryRoot.properties.id,
                contexts: ["selection"]
            },
            () => {
                if (Browser.runtime.lastError) {
                    console.log(`Error creating context menu entry: ${Browser.runtime.lastError}`);

                    return;
                }

                ContextMenuHandler._entries.push(entry);

                entry.onCreate?.();
            }
        );

        Browser.contextMenus.onClicked.addListener((info, tab) => {
            if (info.menuItemId !== entry.properties.id) {
                return;
            }

            entry.onClick(info, tab);
        });
    };

    public static get = () => {
        return ContextMenuHandler._entries;
    };

    public static remove = (entry: ContextMenuEntry) => {
        Browser.contextMenus.remove(entry.properties.id);

        ContextMenuHandler._entries = ContextMenuHandler._entries.filter((e) => e !== entry);
    };

    public static removeById = (id: string) => {
        Browser.contextMenus.remove(id);

        ContextMenuHandler._entries = ContextMenuHandler._entries.filter(
            (e) => e.properties.id !== id
        );
    };

    public static setRoot = (entry: ContextMenuEntry) => {
        ContextMenuHandler._entryRoot = entry;

        Browser.contextMenus.create({
            ...entry.properties,
            contexts: ["selection"]
        });
    };
}

export default ContextMenuHandler;
