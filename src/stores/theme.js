import { atom } from 'recoil';

export const THEME_FLAG = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const themeState = atom({
  key: 'THEME_STATE',
  default: THEME_FLAG.LIGHT,
});
