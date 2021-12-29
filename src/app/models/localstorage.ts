export interface LocalStorageState {
    theme: Theme;
}

export const DefaultState: LocalStorageState = {
    theme: 'light-theme'
};

export type Theme = 'dark-theme'|'light-theme';
