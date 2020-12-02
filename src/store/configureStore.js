import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import charactersReducers from '../reducers/characters';
import filtersReducers from '../reducers/filters';

export default () => {
   const store = createStore(
      combineReducers({
         characters: charactersReducers,
         filters: filtersReducers
      }),
      applyMiddleware(thunk)
   );

   return store;
};