import Browser from 'webextension-polyfill';

class CheckHandler {
    public static isExternalTabRequested = (data: Browser.Menus.OnClickData): boolean => {
        return data.button === 1 || data.modifiers.includes("Shift");
    };
}

export default CheckHandler;
