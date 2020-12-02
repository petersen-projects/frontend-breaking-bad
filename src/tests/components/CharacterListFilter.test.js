import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import filtersReducer from '../../reducers/filters';
import { setNameFilter, setCharacterStatusFilter } from '../../actions/filters';
import { filters } from '../fixtures/filters';
import { CharacterListFilter } from '../../components/CharacterListFilter';

describe('<CharacterListFilter /> tests', () => {
   const mockStore = createStore(filtersReducer, {filters});
   mockStore.dispatch = jest.fn();
   const getWrapper = () => mount(
      <Provider store={mockStore}>
         <CharacterListFilter />
      </Provider>
   );

   it('should render correctly', () => {
      expect(getWrapper).toMatchSnapshot();
   });

   it('test name change event', () => {
      const wrapper = getWrapper();
      wrapper.find('input').simulate('change');
      expect(mockStore.dispatch).toHaveBeenCalledWith(setNameFilter());
   });

   it('test status change event', () => {
      const wrapper = getWrapper();
      wrapper.find('select').simulate('change');
      expect(mockStore.dispatch).toHaveBeenCalledWith(setCharacterStatusFilter());
   });
});
