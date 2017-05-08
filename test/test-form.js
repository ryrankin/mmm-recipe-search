import React from 'react';
import TestUtils from 'react-dom/test-utils';
import chai from 'chai';

const should = chai.should();

import Form from '../js/components/form';

describe('Form component', function(){
	it('Renders a query-input form', function(){

		const renderer = TestUtils.createRenderer();
		renderer.render(<Form />);
		const result = renderer.getRenderOutput();

		result.type.should.equal('div');
		result.props.className.should.equal('form-div col-md-12');

	});
});