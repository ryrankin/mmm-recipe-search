import actions from '../actions/index';

const reducer = (state={}, action => {

	switch(action.type){

		case actions.GET_SEARCH_SUCCESS:
		const searchState = Object.assign({}, state, {
			results: action.results
		});
		return searchState;

		case actions.GET_SEARCH_ERROR:
		const searchStateError = Object.assign({}, state, {
			error: action.error
		});
		return searchStateError;

		case actions.STORE_RECIPE:
		const recipeState = Object.assign({}, state, {
			recipe: action.recipe
		});
		return recipeState;
	}
	return state;
}

exports.searchReducer = reducer;