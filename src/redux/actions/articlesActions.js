import { ARTICLES_TYPES } from '../types';

const ACTIONS = {
	getAllArticles: () => ({
		type: ARTICLES_TYPES.GET_ALL_ARTICLES,
	}),
	setAllArticles: (articles) => ({
		type: ARTICLES_TYPES.SET_ALL_ARTICLES,
		payload: articles,
	}),
	setTags: (tags) => ({
		type: ARTICLES_TYPES.SET_TAGS,
		payload: tags,
	}),
};

export default ACTIONS;
