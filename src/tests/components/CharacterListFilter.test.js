import React from 'react';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { CharacterListFilter } from '../../components/CharacterListFilter';

const mockStore = configureMockStore([thunk]);
const initialState = {
   characters: {
      data: [],
      filteredData: []
   },
   filters: {}
};

let setCharacterNameFilter, wrapper;

beforeEach(() => {
   setCharacterNameFilter = jest.fn();
   wrapper = mount(
      <Provider store={mockStore(initialState)}>
         <CharacterListFilter
            filters={{}}
            setCharacterNameFilter={setCharacterNameFilter}
         />
      </Provider>
   );
});

test('should render CharacterListFilter correctly', () => {
   expect(wrapper).toMatchSnapshot();
});
