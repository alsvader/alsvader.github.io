import { AVAILABLE_LANGUAGES } from '../../utils/constants';
import { SYSTEM_ACTIONS, ARTICLES_ACTIONS } from '../actions';

export const loadConfiguration = async (dispatch, getState) => {
	try {
		let language = 'en'; // set 'en' by default

		if (navigator.language) {
			const languageTag = navigator.language.split('-');
			language = languageTag[0];
		}

		const langKey = AVAILABLE_LANGUAGES.findIndex(
			(lang) => lang.code === language
		);

		localStorage.setItem('i18nextLng', language);

		dispatch(SYSTEM_ACTIONS.setLanguageCode(AVAILABLE_LANGUAGES[langKey].code));
		dispatch(SYSTEM_ACTIONS.setLanguageMenuItemSelected(langKey));
		dispatch(
			SYSTEM_ACTIONS.setLanguageLabel(AVAILABLE_LANGUAGES[langKey].label)
		);

		const response = await fetch(
			`${process.env.REACT_APP_API_BASE_URL}/articles`
		);

		const articles = await response.json();
		dispatch(ARTICLES_ACTIONS.setAllArticles(articles));
	} catch (error) {
		console.log(error);
	}
};