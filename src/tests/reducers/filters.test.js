import filtersReducer from '../../reducers/filters';
import {
   SET_FILTER_NAME,
   SET_FILTER_STATUS
} from '../../actions/filters';


describe('filtersReducer tests', () => {
   const defaultState = {
      name: "",
      status: ""
   };
   
   it('should setup default filter values', () => {
      const state = filtersReducer(undefined, {type: '@@INIT'});
      expect(state).toEqual(defaultState)
   });
   
   it(`${SET_FILTER_NAME} - should set filter name to received value`, () => {
      const name = 'ite';
      const state = filtersReducer(undefined, {type: SET_FILTER_NAME, name});
      expect(state).toEqual({
         ...defaultState,
         name
      })
   });
   
   it(`${SET_FILTER_STATUS} - should set filter status to received value`, () => {
      const status = 'ite';
      const state = filtersReducer(undefined, {type: SET_FILTER_STATUS, status});
      expect(state).toEqual({
         ...defaultState,
         status
      })
   });   
});
