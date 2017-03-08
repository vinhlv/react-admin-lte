import React from 'react';
import {connect} from 'react-redux';
import {shallow} from 'enzyme';
import expect from 'expect';

import SigninForm from './SigninForm.jsx';

describe('SigninForm', () => {
  it('should be render the component', () => {
    expect(shallow(<SigninForm/>).length).toEqual(1);
  });
});