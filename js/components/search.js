import React from 'react';
//import 'react-bootstrap';


export default class Search extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			enteredText: '',
			recipeList: [] 
		};

	this.onAddSubmit = this.onAddSubmit.bind(this);
	this.onAddInputChanged = this.onAddInputChanged.bind(this);
}

	onAddInputChanged(e){
		console.log('onAddInputChanged', e.target.value);
		let newState = e.target.value;
		this.setState({
			enteredText: newState
		})
	}


	onAddSubmit(e){
		e.preventDefault();
		let text = this.state.enteredText;
		let results = this.state.recipeList;
		results.push(text);
		this.setState({
			recipeList: results
		})
	}

	render(){
		return(
		<div className='form-div col-md-12' id='search'>
			<form className='form-inline formDiv col-md-8'>
				<input className='form-control col-md-8' id='search-box' type='text' onChange={this.onAddInputChanged} placeholder='Search Recipe' />
				<input className='btn btn-default' id='search-btn' type='submit' onClick={this.onAddSubmit} />
			</form>
			<div className='recipe-list'>
				{this.state.recipeList}
			</div>
		</div>
		)
	}
}
	
