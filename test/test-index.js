import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import HelloWorld from '../js/components/hello';

describe('HelloWorld component', function(){
	it('Renders a greeting', function(){
		const greeting = 'Hello World';

		const renderer = TestUtils.createRenderer();
		renderer.render(<HelloWorld greeting={greeting} />);
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('greeting');
	})
})