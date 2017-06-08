import 'isomorphic-fetch';

export const ADD_RECIPE = 'ADD_RECIPE';
export const addRecipe  = recipe => ({
	type: ADD_RECIPE,
	recipe
});

export const RATE_RECIPE = 'RATE_RECIPE';
export const rateRecipe = (recipe, rating) => ({
	type: RATE_RECIPE,
	recipe, 
	rating
});

export const POST_FAVORITE_RECIPE_SUCCESS = 'POST_FAVORITE_RECIPE_SUCCESS';
export const postFavoriteRecipeSuccess = (message, recipe) => ({
	type: POST_FAVORITE_RECIPE_SUCCESS,
	message,
	recipe
});

export const POST_FAVORITE_RECIPE_ERROR = 'POST_FAVORITE_RECIPE_ERROR';
export const postFavoriteRecipeError = error => ({
	type: POST_FAVORITE_RECIPE_ERROR,
	error
});

export const postFavoriteRecipe = recipe => dispatch => {
	fetch('/favorites', {
		method:'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({recipe: recipe})
	}).then(response => {
		if (response.ok){
			let error = new Error(response.statusText);
			error.response = response;
			throw error;
		}
	})
		.then(response => response.json())
		.then(data => {
			dispatch(postFavoriteRecipeSuccess(data.message, data.recipe));
			console.log(data);
		})
		.catch(error => {
			dispatch(postFavoriteRecipeError(error));
		})
	};

export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const fetchSearchSuccess = (recipe, results) => ({
	type: FETCH_SEARCH_SUCCESS,
	recipe, 
	results
});

export const FETCH_SEARCH_ERROR = 'FETCH_SEARCH_ERROR';
export const fetchSearchError = (recipe, error) => ({
	type: FETCH_SEARCH_ERROR, 
	recipe, 
	error
});


export const fetchSearch = () => dispatch => {
	const url = `http://api.yummly.com/v1/api/recipes?_app_id=9938b1bb&_app_key=1cefa4ae1c3981ad45d88f8d7b177c50&q/${recipe}`;
	return fetch(url).then(response => {
		if(!response.ok){
			const error = new Error(response.statusText)
			error.response = response
			throw error;
		}
		return response;
	})
	.then(reponse => response.json())
	.then(data =>
		dispatch(fetchSearchSuccess(recipe, data.results))
		)
	.catch(error =>
		dispatch(fetchSearchError(recipe, error))
		);
	};