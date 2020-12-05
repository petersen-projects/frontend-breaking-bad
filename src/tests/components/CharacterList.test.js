import React from 'react';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import '../__mocks__/intersectionObserverMock';

import CharacterList from '../../components/CharacterList';
import characters from '../fixtures/characters';


describe('<CharactersList /> tests', () => {
   const mockStore = configureMockStore([thunk]);
   const initialState = {
      characters: {
         data: characters,
         filteredData: characters
      },
      filters: {}
   };
   const wrapper = mount(
      <Provider store={mockStore(initialState)}>
         <CharacterList filteredData={characters} />
      </Provider>
   );

   it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
   });

   it('should render CharactersList with characters - check for first character', () => {
      const listItem = (
         wrapper
            .find('.list-body .list-item')
            .first()
      );
      const listItemTitle = listItem.find('.list-item__title').text();
      const listItemInfo1 = listItem.find('.list-item__info1').text();
      const listItemInfo2 = listItem.find('.list-item__info2').text();
      expect(listItemTitle).toBe(characters[0].name);
      expect(listItemInfo1).toBe('Age: ');
      expect(listItemInfo2).toBe(`Status: ${characters[0].status}`);
   });
});