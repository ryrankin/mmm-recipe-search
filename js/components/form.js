import React from 'react';
import Header from './header';
import Search from './search';
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
				<form className='form-inline formDiv col-md-8' onSubmit={this.onAddSubmit}>
					<input className='form-control col-md-8' type='text' name='artist' placeholder='Search Recipe' ref={ref => this.onArtistNameInput = ref} />
					<input className='btn btn-default' type='submit' onSubmit={this.onAddSubmit} onClick={this.onArtistNameInput} />
				</form>
			</div>
		)
	}
}

