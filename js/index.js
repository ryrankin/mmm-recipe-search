require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';	
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Favorites from './components/favorites';
import Search from './components/search';
import Recipe from './components/recipe';
import App from './components/app';

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Search} />
			<Route path='recipeId' component={Recipe}/>
			<Route path='favorites' component={Favorites} />
		</Route>
	</Router>
	);

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(routes, document.getElementById('app'))
	);

