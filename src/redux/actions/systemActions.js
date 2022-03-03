import { SYSTEM_TYPES } from '../types';

const ACTIONS = {
	setLanguageCode: (code) => ({
		type: SYSTEM_TYPES.SET_LANGUAGE_CODE,
		payload: code,
	}),
	setLanguageMenuItemSelected: (index) => ({
		type: SYSTEM_TYPES.SET_LANGUAGE_MENU_ITEM_SELECTED,
		payload: index,
	}),
	setLanguageLabel: (label) => ({
		type: SYSTEM_TYPES.SET_LANGUAGE_LABEL,
		payload: label,
	}),
	setDrawerOpen: (open) => ({
		type: SYSTEM_TYPES.SET_DRAWER_OPEN,
		payload: open,
	}),
};

export default ACTIONS;
