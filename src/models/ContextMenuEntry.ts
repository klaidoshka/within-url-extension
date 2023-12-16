import Browser from 'webextension-polyfill';

type ContextMenuEntry = {
    onClick: (info: Browser.Menus.OnClickData, tab?: Browser.Tabs.Tab) => void;
    onCreate?: () => void;
    properties: Browser.Menus.CreateCreatePropertiesType & {
        id: string;
    };
};

export default ContextMenuEntry;
export type { ContextMenuEntry };
