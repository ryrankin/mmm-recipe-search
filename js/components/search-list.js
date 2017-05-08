import React from 'react';
import * as actions from '../actions/index';

export class SearchList extends React.Component{
	constructor(props){
		super(props);
	}

	searchArtist(){
		const artistName = this.artistNameInput.value;
		this.props.dispatch(actions.searchArtist(artistName));
	};

	render(){
		return(
			<div className='react'>
				<Navbar className='navigation col-md-2' />
					{this.props.children}
				</div>
		)
	}
}
