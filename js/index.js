require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'react-router';
import Header from './components/header';
import Form from './components/form';

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(<Form />, document.getElementById('app'))
	);

