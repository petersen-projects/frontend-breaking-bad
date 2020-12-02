import {
   GET_CHARACTERS_REQUEST_ERROR,
   GET_CHARACTERS_REQUEST_SUCCESS,
   
   SET_CHARACTERS_DATA,
   SET_CHARACTERS_OFFSET,
   SET_CHARACTERS_NUMBER_OF_PAGES,
   SET_CHARACTERS_FILTERED_DATA,
   
   RESET_CHARACTERS_OFFSET,
   RESET_CHARACTERS_FILTERED_DATA,

   getCharactersError,
   getCharactersSuccess,
   setCharactersOffset,
   resetCharactersOffset,
   setCharactersNumberOfPages,
   setCharactersData,
   setCharactersFilteredData,
   resetCharactersFilteredData
   
} from '../../actions/characters';

import { parseCharactersResultFromWs } from '../../middlewares/characters';

import characters from '../fixtures/characters';

describe('charactersActions tests', () => {
   it('should setup getCharactersSuccess action object', () => {
      const result = getCharactersSuccess(characters);
   
      expect(result).toEqual({
         type: GET_CHARACTERS_REQUEST_SUCCESS,
         data: parseCharactersResultFromWs(characters)
      });
   });
   
   it('should setup getCharactersError action object', () => {
      const error = 'An error occured!';
      const result = getCharactersError(error);
   
      expect(result).toEqual({
         type: GET_CHARACTERS_REQUEST_ERROR,
         error
      });
   });
   
   it('should setup setCharactersOffset action object', () => {
      const offset = 1;
      const result = setCharactersOffset(offset);
   
      expect(result).toEqual({
         type: SET_CHARACTERS_OFFSET,
         offset
      });
   });
   
   it('should setup resetCharactersOffset action object', () => {
      const result = resetCharactersOffset();
   
      expect(result).toEqual({
         type: RESET_CHARACTERS_OFFSET
      });
   });
   
   it('should setup setCharactersNumberOfPages action object', () => {
      const numberOfPages = 5;
      const result = setCharactersNumberOfPages(numberOfPages);
   
      expect(result).toEqual({
         type: SET_CHARACTERS_NUMBER_OF_PAGES,
         numberOfPages
      });
   });
   
   it('should setup setCharactersData action object', () => {
      const result = setCharactersData(characters);
   
      expect(result).toEqual({
         type: SET_CHARACTERS_DATA,
         data: characters
      });
   });
   
   it('should setup setCharactersFilteredData action object', () => {
      const filteredData = [1, 2, 3, 4];
      const result = setCharactersFilteredData(filteredData);
   
      expect(result).toEqual({
         type: SET_CHARACTERS_FILTERED_DATA,
         filteredData
      });
   });
   
   it('should setup resetCharactersFilteredData action object', () => {
      const result = resetCharactersFilteredData(characters);
   
      expect(result).toEqual({
         type: RESET_CHARACTERS_FILTERED_DATA
      });
   });
});