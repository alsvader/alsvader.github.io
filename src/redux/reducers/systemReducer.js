import { SYSTEM_TYPES } from '../types';

const initialState = {
  languageMenuItemSelected: 0,
  languageLabel: 'languages.spanish',
  drawerOpen: false,
};

export default function systemReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SYSTEM_TYPES.SET_LANGUAGE_MENU_ITEM_SELECTED:
      return { ...state, languageMenuItemSelected: payload };
    case SYSTEM_TYPES.SET_LANGUAGE_LABEL:
      return { ...state, languageLabel: payload };
    case SYSTEM_TYPES.SET_DRAWER_OPEN:
      return { ...state, drawerOpen: payload };
    default:
      return { ...state };
  }
}
