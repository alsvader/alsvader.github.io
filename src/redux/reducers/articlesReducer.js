import { ARTICLES_TYPES } from '../types';

const initialState = {
	data: [],
	posts: [],
	termSearch: '',
	noDataFound: false,
};

export default function articlesReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case ARTICLES_TYPES.SET_ALL_ARTICLES:
			return { ...state, data: payload, posts: payload };
		default:
			return { ...state };
	}
}
