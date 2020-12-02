import React from 'react';
import { shallow } from 'enzyme';
import { CharacterListItem }  from '../../components/CharacterListItem';
import characters from '../fixtures/characters';

describe('<CharacterListItem /> tests', () => {   
   it('should render correctly', () => {
      const wrapper = shallow(<CharacterListItem />);
      expect(wrapper).toMatchSnapshot();
   });

   it('should render CharacterListItem with first character', () => {
      const wrapper = shallow(<CharacterListItem {...characters[0]} />);
      expect(wrapper).toMatchSnapshot();
      const title = wrapper.find('.list-item__title').text();
      const info1 = wrapper.find('.list-item__info1').text();
      const info2 = wrapper.find('.list-item__info2').text();
      expect(title).toBe(`${characters[0].name}`);
      expect(info1).toBe(`Age: `);
      expect(info2).toBe(`Status: ${characters[0].status}`);
   });
});
