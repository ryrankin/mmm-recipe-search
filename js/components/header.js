import React from 'react';
import ReactDOM from 'react-dom';
//import Navbar from './navbar';
import Search from './search';

export default function Header(props){
	return(
	<div style={{display:'-webkit-inline-box'}} className='log-nav'>
		<div style={{display: "-webkit-inline-box"}}>
			<div>
				<h1>Recipe search</h1>
			</div>
			<div>
				<a href="/search">Search</a>
			</div>
			<div>
				<a href="/favorites">Favorites</a>
			</div>
		</div>
	</div>
	)
}