import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'

export default function Header(){
	return(
	<div style={{display:'-webkit-inline-box'}} className='log-nav' id="transparent">
			<div>
				<h1>Mmm recipe</h1>
			</div>
			<div className='nav-link'>
				<Link to={'/'}>Search</Link>
			</div>
			<div className='nav-link'>
				<Link to={'/favorites/'}>Favorites</Link>
			</div>
	</div>
	)
}