require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';	
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import store from './store'; 

import Favorites from './components/favorites';
import Search from './components/search';
import Recipe from './components/recipe';
import App from './components/app';

const routes = (
	<Provider store={store}>
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Search} />
			<Route path='recipeId' component={Recipe}/>
			<Route path='favorites' component={Favorites} />
		</Route>
	</Router>
	</Provider>
	);

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(routes, document.getElementById('app'))
	);

