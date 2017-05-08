import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

import * as actions from '../js/actions/index';
import store from '../js/store';

import Header from '../js/components/header';

describe('Header component', function(){
	it('Renders a header component', function(){

		const renderer = TestUtils.createRenderer();
		renderer.render(<Header />);

		const result = renderer.getRenderOutput();
		result.props.className.should.equal('log-nav');
	})
})