import {
   SET_FILTER_NAME,
   SET_FILTER_STATUS,

   setNameFilter,
   setCharacterStatusFilter
} from '../../actions/filters';

test('should setup setNameFilter action object', () => {
   const name = "Test Character";
   const result = setNameFilter(name);

   expect(result).toEqual({
      type: SET_FILTER_NAME,
      name
   });
});

test('should setup setCharacterStatusFilter action object', () => {
   const status = "Test status";
   const result = setCharacterStatusFilter(status);

   expect(result).toEqual({
      type: SET_FILTER_STATUS,
      status
   });
});