const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
	image: {type: String, required: true},
	name: {type: String, required: true},
	ingredients: {type: Array, required: true},
});
recipeSchema.index({index: 'text'});

recipeSchema.methods.apiRepr = function(){
	return {
		id: this._id,
		image: this.image,
		name: this.name,
		ingredients: this.ingredients

	};
}

const Recipes = mongoose.model('Recipes', recipeSchema);

module.exports = {Recipes};