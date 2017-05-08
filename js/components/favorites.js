import React from 'react';
import ReactDOM from 'react-dom';

export default function Favorites(props){
	return(
		<div className="favorites-container" id="transparent">
			<div className="delete-favorites">
				<button className="delete-favorites">
					<img src="/assets/images/remove-icon.png" />
				</button>
			</div>
				<h5>Your Favorites</h5>
					<ul>
						<li><a href="#">Mac and Cheese</a></li>
						<li><a href="#">Country Fried Steak</a></li>
						<li><a href="#">Hot Pot</a></li>
						<li><a href="#">Yellow Duck Curry</a></li>

					</ul>
		</div>
		)
}