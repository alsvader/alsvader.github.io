import { ARTICLES_TYPES } from '../types';

const ACTIONS = {
	getAllArticles: () => ({
		type: ARTICLES_TYPES.GET_ALL_ARTICLES,
	}),
	setAllArticles: (articles) => ({
		type: ARTICLES_TYPES.SET_ALL_ARTICLES,
		payload: articles,
	}),
	setArticles: (articles) => ({
		type: ARTICLES_TYPES.SET_ARTICLES,
		payload: articles,
	}),
	setTags: (tags) => ({
		type: ARTICLES_TYPES.SET_TAGS,
		payload: tags,
	}),
	setTermSearch: (term) => ({
		type: ARTICLES_TYPES.SET_TERM_SEARCH,
		payload: term,
	}),
	setNoDataFound: (noData) => ({
		type: ARTICLES_TYPES.SET_NO_DATA_FOUND,
		payload: noData,
	}),
};

export default ACTIONS;
