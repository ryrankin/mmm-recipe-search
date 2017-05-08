import React from 'react';
import Header from './header';
import Search from './search';
import Favorites from './favorites';
import RecipeList from './recipeList';
//import Navbar from './navbar';
//import SearchList from './search-list';

export default class Form extends React.Component{
	constructor(props){
	super(props);
	this.state = {
		enteredText : '',

	};

	this.onArtistNameInput = this.onArtistNameInput.bind(this);
	this.onAddSubmit = this.onAddSubmit.bind(this);
}

onArtistNameInput(e){
	console.log('onArtistNameInput', e.target.value);
	let newState = e.target.value;
	this.setState({
		enteredText: newState
	})
}

onAddSubmit(e){
	e.preventDefault();
	let newText = this.state.enteredText;
	let newList = this.state.searchList;
	newList.push(newText);
	this.setState({
		searchList: newList
	})
}

	render(props){
		return(
			<div className='form-div col-md-12'>
				<Header />
					<Search />
						<RecipeList />
							<Favorites />


			</div>
		)
	}
}

