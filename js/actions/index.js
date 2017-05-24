import axios from 'axios';

const GET_SEARCH_SUCCESS = 'GET_SEARCH_SUCCESS';
const getSearchSuccess = (results) => {
	return {
		type: GET_SEARCH_SUCCESS,
		results: results
	}
}

const GET_SEARCH_ERROR = 'GET_SEARCH_ERROR';
const getSearchError = (error) => {
	return {
		type: GET_SEARCH_ERROR,
		error: error
	}
}

const getSearch = (recipe) => {
	return (dispatch) => {
		axios.get('/recipe/' + keyword)
		.then((res) => {
			return dispatch(getSearchSuccess(res.data))
		})
		.catch((error) => {
			return dispatch(getSearchError(error))
		});
	}
}

const STORE_RECIPE = 'STORE_RECIPE';
const storeRecipe = (recipe) => {
	return {
		type: STORE_RECIPE,
		recipe: recipe
	}
}

exports.GET_SEARCH_SUCCESS = GET_SEARCH_SUCCESS;
exports.getSearchSuccess = getSearchSuccess;

exports.GET_SEARCH_ERROR = GET_SEARCH_ERROR;
exports.getSearchError = getSearchError;

exports.STORE_RECIPE = STORE_RECIPE;
exports.storeRecipe = storeRecipe;