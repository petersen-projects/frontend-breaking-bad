import {
   SET_FILTER_NAME,
   SET_FILTER_STATUS,

   setNameFilter,
   setCharacterStatusFilter
} from '../../actions/filters';

describe('filtersActions tests', () => {
   it('should setup setNameFilter action object', () => {
      const name = "test Character";
      const result = setNameFilter(name);
   
      expect(result).toEqual({
         type: SET_FILTER_NAME,
         name
      });
   });
   
   it('should setup setCharacterStatusFilter action object', () => {
      const status = "test status";
      const result = setCharacterStatusFilter(status);
   
      expect(result).toEqual({
         type: SET_FILTER_STATUS,
         status
      });
   });
});

