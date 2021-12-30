export interface LocalStorageState {
    theme: Theme;
    drawerOpen: boolean;
}

export const DefaultState: LocalStorageState = {
    theme: 'light-theme',
    drawerOpen: false
};

export type Theme = 'dark-theme'|'light-theme';
