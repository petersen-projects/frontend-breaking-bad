import React from 'react';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';

import { CharacterList } from '../../components/CharacterList';
import characters from '../fixtures/characters';

const mockStore = configureMockStore([thunk]);
const initialState = {
   characters: {
      data: [],
      filteredData: []
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

test('should render CharactersList with empty message', () => {
   const wrapper = mount(
      <Provider store={mockStore(initialState)}>
         <CharacterList filteredData={[]} />
      </Provider>
   );

   expect(wrapper).toMatchSnapshot();
   expect(wrapper.find('.message').text()).toBe("no data :(");
});
