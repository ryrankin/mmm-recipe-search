import React from 'react';
import ReactDOM from 'react-dom';
import RECIPES from '../recipes'

export default function Favorites(props){
	return(
		<div className="favorites-container" id="transparent">
			<div className="delete-favorites">
				<button className="delete-favorites">
					<img src="/assets/images/remove-icon.png" />
				</button>
			</div>
				<h4 className='favorites-title'>Your Favorites</h4>
					<ul>
						<li><a href="#/recipes/0">Mac and Cheese</a></li>
						<li><a href="#/recipes/1">Country Fried Steak</a></li>
						<li><a href="#/recipes/2">Hot Pot</a></li>
						<li><a href="#/recipes/3">Yellow Duck Curry</a></li>

					</ul>
		</div>
		)
}