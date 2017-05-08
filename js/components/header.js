import React from 'react';
import ReactDOM from 'react-dom';
//import Navbar from './navbar';

export default function Header(){
	return(
	<div style={{display:'-webkit-inline-box'}} className='log-nav' id="transparent">
			<div>
				<h1>Recipe search</h1>
			</div>
			<div className='nav-link'>
				<a href="/search">Search</a>
			</div>
			<div className='nav-link'>
				<a href="/favorites">Favorites</a>
			</div>
			<div className='nav-link'>
				<a href="/login">Login</a>
			</div>
	</div>
	)
}