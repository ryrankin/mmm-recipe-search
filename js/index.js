require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/hello';

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(<HelloWorld greeting='Hello Ryan' />, document.getElementById('app'))
	);

