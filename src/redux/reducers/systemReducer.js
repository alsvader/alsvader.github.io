import { SYSTEM_TYPES } from '../types';

const initialState = {
	languageCode: null,
	languageMenuItemSelected: null,
	languageLabel: null,
	drawerOpen: false,
	isLoading: false,
};

export default function systemReducer(state = initialState, { type, payload }) {
	switch (type) {
		case SYSTEM_TYPES.SET_LANGUAGE_MENU_ITEM_SELECTED:
			return { ...state, languageMenuItemSelected: payload };
		case SYSTEM_TYPES.SET_LANGUAGE_LABEL:
			return { ...state, languageLabel: payload };
		case SYSTEM_TYPES.SET_DRAWER_OPEN:
			return { ...state, drawerOpen: payload };
		case SYSTEM_TYPES.SET_LANGUAGE_CODE:
			return { ...state, languageCode: payload };
		case SYSTEM_TYPES.SET_IS_LOADING:
			return { ...state, isLoading: payload };
		default:
			return { ...state };
	}
}
