import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';

import TextFieldGroup from './TextFieldGroup.jsx';

describe('TextFieldGroup', () => {
  it('should be render the component', () => {
    const props = {
      field: '', value: '', label: '', error: '', type: '', onChange: () => {}
    };
    const wrapper = shallow(<TextFieldGroup {...props}/>);
    expect(wrapper.length).toEqual(1);
  });
});