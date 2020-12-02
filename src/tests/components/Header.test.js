import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/Header';

test('should render Header correctly', () => {
   const wrapper = shallow(<Header />);
   expect(wrapper).toMatchSnapshot();

   // expect(wrapper.find('div').length).toBe(1);
   // expect(wrapper.find('div').text()).toBe('header');
   // const renderer = new ReactShallowRenderer();
   // renderer.render(<Header />);
   // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
