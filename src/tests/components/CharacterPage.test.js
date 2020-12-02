import React from 'react';
import { shallow } from 'enzyme';
import CharacterPage from '../../components/CharacterPage';

test('should render CharacterPage correctly', () => {
   const wrapper = shallow(<CharacterPage />);
   expect(wrapper).toMatchSnapshot();
});
