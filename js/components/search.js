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
	this.searchRecipe = this.searchRecipe.bind(this);
	this.storeRecipe = this.storeRecipe.bind(this);
	}
	searchRecipe(e){
		e.preventDefault();
		const recipe = e.target.recipe.value;
		this.props.dispatch(actions.getRecipe(recipe))
	}
	storeRecipe(e){
		const recipe = e.target.className;
		this.props.dispatch(actions.storeRecipe(recipe))
	}
	componentWillUnmount(){
		this.props.state.searchReducer = {};
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
	
