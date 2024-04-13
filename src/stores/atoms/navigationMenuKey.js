import { atom } from 'recoil';

export const navigationMenuKeyState = atom({
  key: 'NAVIGATION_BAR_MENU_KEY',
  default: window.location.pathname.replace('/', ''),
});
