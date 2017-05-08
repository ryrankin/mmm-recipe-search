import React from 'react';

export default function Search(props){
	return(
		<div className='log-nav'>
			<div>
				<h4 className='name'>Search</h4>
			</div>
			<form className='form-inline formDiv col-md-8' onSubmit={props.onAddSubmit}>
					<input className='form-control col-md-8' type='text' name='artist' placeholder='Search Recipe' ref={ref => props.onArtistNameInput = ref} />
					<input className='btn btn-default' type='submit' onSubmit={props.onAddSubmit} onClick={props.onArtistNameInput} />
				</form>
		</div>
	)
}