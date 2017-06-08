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
					
				</ul>
		</div>
		)
}