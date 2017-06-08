import * as actions from '../actions/index';
import store from '../store';

const initialRecipeState = [];

export const recipeReducer = (state=initialRecipeState, action) => {
	if(action.type === actions.ADD_RECIPE){
		return [...state, {
			name: action.recipe,
			rating: null
		}];
	}
	else if (action.type === action.RATE_RECIPE){
		const index = state.findIndex(recipe =>
			recipe.name === action.recipe
			);

		if (index === -1){
			throw new Error('Could not find recipe');
		}

		const before = state.slice(0, index);
		const after = state.slice(index + 1);
		const newRecipe = Object.assign({}, state[index], {rating: action.rating});
		return [...before, newRecipe, ...after];
	}

	return state;
};