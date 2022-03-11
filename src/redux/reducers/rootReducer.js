import { combineReducers } from 'redux';
import systemReducer from './systemReducer';
import articlesReducer from './articlesReducer';

export default combineReducers({
	system: systemReducer,
	articles: articlesReducer,
});
