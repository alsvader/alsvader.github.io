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

		articles.sort(
			(a, b) =>
				new Date(b.attributes.published) - new Date(a.attributes.published)
		);

		const tags = articles.map((article) => article.attributes.tag);

		dispatch(ARTICLES_ACTIONS.setAllArticles(articles));
		dispatch(ARTICLES_ACTIONS.setTags(tags));
	} catch (error) {
		console.log(error);
	}
};

export const searchArticles = (term) => (dispatch, getState) => {
	const {
		articles: { data },
	} = getState();

	dispatch(SYSTEM_ACTIONS.setIsLoading(true));
	dispatch(ARTICLES_ACTIONS.setTermSearch(term));

	if (!term) {
		dispatch(ARTICLES_ACTIONS.setArticles(data));
		dispatch(ARTICLES_ACTIONS.setNoDataFound(false));
		dispatch(SYSTEM_ACTIONS.setIsLoading(false));
		return;
	}

	const articlesFiltered = data.filter((article) =>
		article.attributes.title.toLowerCase().includes(term.toLowerCase())
	);

	dispatch(ARTICLES_ACTIONS.setArticles(articlesFiltered));

	if (articlesFiltered.length === 0) {
		dispatch(ARTICLES_ACTIONS.setNoDataFound(true));
	} else {
		dispatch(ARTICLES_ACTIONS.setNoDataFound(false));
	}

	dispatch(SYSTEM_ACTIONS.setIsLoading(false));
};

export const searchByTags = (tags) => (dispatch, getState) => {
	const {
		articles: { data },
	} = getState();

	if (tags.length === 0) {
		dispatch(ARTICLES_ACTIONS.setArticles(data));
		return;
	}

	tags = tags.map((tag) => tag.toLowerCase());

	const articlesFiltered = data.filter((article) =>
		tags.includes(article.attributes.tag.toLowerCase())
	);

	dispatch(ARTICLES_ACTIONS.setArticles(articlesFiltered));
};
