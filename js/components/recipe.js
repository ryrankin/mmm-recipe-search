import React from 'react';
import {Link} from 'react-router';
import RECIPES from '../recipes';

export default function Recipe(props){
	return (
		<div>
			<strong>
				<Link to={'/recipes/' + props.id}>
					{props.name}
				</Link>
			</strong>
			&nbsp;
			{props.description}
		</div>
	);
};