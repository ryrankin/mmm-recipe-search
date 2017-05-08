import React from 'react';
import Seach from './search';
import { Link } from 'react-router';

export default function Navbar(props){
	return(
		<div style={{display:'-webkit-inline-box'}} className='log-nav'>
		<Nav />
			<div style={{display:'-webkit-inline-box'}}>
				<div style={{display:'-webkit-inline-box'}}>
					<h4 className='name'>Recipe Search :</h4>
				</div>
				<div className='link-div'>
					<div>
						<Link to='/search'>Search</Link>
					</div>
					<div>
						<Link to='/favorites'>Favorites</Link>
					</div>
				</div>
			</div>
		</div>
	)
}