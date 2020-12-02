import React from 'react';
import { shallow } from 'enzyme';
import CharacterPage from '../../components/CharacterPage';

describe('<CharacterPage /> tests', () => {
   it('should render CharacterPage correctly', () => {
      const wrapper = shallow(<CharacterPage />);
      expect(wrapper).toMatchSnapshot();
   });   
});