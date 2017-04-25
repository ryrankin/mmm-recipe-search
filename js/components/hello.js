import React from 'react';

export default function HelloWorld(props){
	return (
		<div className="greeting">
		<h1>{props.greeting}</h1>
		</div>
	);
}