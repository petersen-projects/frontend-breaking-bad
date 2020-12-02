import React from 'react';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import '../__mocks__/intersectionObserverMock';

import { CharacterList } from '../../components/CharacterList';
import characters from '../fixtures/characters';

const mockStore = configureMockStore([thunk]);
const initialState = {
   characters: {
      data: characters,
      filteredData: characters
   },
   filters: {}
};

test('should render CharactersList with characters', () => {
   const wrapper = shallow(
      <Provider store={mockStore(initialState)}>
         <CharacterList filteredData={characters} />
      </Provider>
   );
   expect(wrapper).toMatchSnapshot();
});

test('should render CharactersList with characters - check for first character', () => {
   const wrapper = mount(
      <Provider store={mockStore(initialState)}>
         <CharacterList/>
      </Provider>
   );
   expect(wrapper).toMatchSnapshot();
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
