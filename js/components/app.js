import React from 'react';
import Header from './header';
import Search from './search';
import Favorites from './favorites';

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
				enteredText: '',
				recipeList: []
		};
	}
	
	render(){
			return (
				<div className='form-div col-md-12'>
					<Header />
						<h1>
						</h1>
					<div>
						{this.props.children}
					</div>
				</div>
		);
	}	
};