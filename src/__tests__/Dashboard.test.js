import React from 'react';
import { mount } from 'enzyme';
import Dashboard from '../pages/Dashboard';

describe('render Dashboard component', () => {
  it('renders snapshot', () => {
    const wrapper = mount(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
