//load resources
const express = require('express');
const bodyParser = require('body-parser');

const morgan = require('morgan');
const mongoose = require('mongoose');
const RecipeModel = require('./models/recipe-model');

const {DATABASE_URL, PORT} = require('./config');
const {Recipe} = require('./models/recipe-model');

app.use(bodyParser.json());
app.use(morgan('common'));
app.use(express.static('build'));
mongoose.Promise = global.Promise;

//initialize app
const app = express();

app.get('/recipes', (req, res) => {
	Recipes
	.find()
	.exec()
	.then(recipes => {
		res.json(recipes.map(recipe => recipe.apiRepr()));
	})

	.catch(
		err => {
			console.error(err);
			res.status(500).json({error: 'Internal server error'});
		});
	});

//API call
const getRecipes = function(keyword, args){
	var emitter = new events.EventEmitter();
	unirest.get('http://api.yummly.com/v1/api/recipes?_app_id=9938b1bb&_app_key=1cefa4ae1c3981ad45d88f8d7b177c50&q=" + keyword + "&requirePictures=true')
	.qs(args)
	.end(function(res){
		if(res.ok){
			emitter.emit('end', res.body);
		}
		else {
			emitter.emit('error', res.code);
		}
	});
	return emitter;
}

app.get('/recipe/:keyword', function(req, res){
	if(req.params.keyword == ''){
		res.json('Specify a search');
	}
	else{
		var recipeDetails = getRecipes(req.params.keyword, {
			contentType: "application/json",
			async: false,
			dataType: "json"
		});

		recipeDetails.on('error', function(code){
			res.sendStatus(code);
		});
	}
});

app.post('/favorites', function(req, res){
	RecipeModel.create({
		name: req.body.recipeName
	}, function(err, recipes){
		if(err){
			return res.status(500).json({
				message: 'Internal Server Error'
			});
		}
		res.status(200).json(recipes)
	});
});

app.delete('/delete-favorites', function(req, res){
	RecipeModel.remove(req.params.id, function(err, items){
		if(err)
			return res.status(404).json({
				message: 'Item not found'
			});
		res.status(200).json(items);
	});
});

app.use('*', function(req, res){
	res.status(404).json({message: 'Not found'});
});

let server; 

function runServer(databaseUrl=DATABASE_URL, port=PORT){
	return new Promise((resolve, reject) => {
		mongoose.connect(databaseUrl, err => {
			if(err){
				return reject(err);
			}
			server = app.listen(port, () => {
				console.log(`Your app is listening on ${port}`);
				resolve();
			});
			.on('error', err => {
				mongoose.disconnect();
				reject(err);
			});
		});
	});
}

function closeServer(){
	return mongoose.disconnect().then(() => {
		console.log('Closing server');
		server.close(err => {
			if(err){
				return reject(err);
			}
			resolve();
		});
	});
}


if(require.main === module){
	runServer().catch(err => console.error(err));
};

module.exports = {runServer, app, closeServer};











