import React from 'react';
import { shallow } from 'enzyme';
import { CharacterListItem }  from '../../components/CharacterListItem';
import characters from '../fixtures/characters';

test('should render CharacterListItem correctly', () => {
   const wrapper = shallow(<CharacterListItem />);
   expect(wrapper).toMatchSnapshot();
});


test('should render CharacterListItem with first character', () => {
   const wrapper = shallow(<CharacterListItem {...characters[0]} />);
   expect(wrapper).toMatchSnapshot();
});
