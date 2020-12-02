import charactersReducer from '../../reducers/characters';
import {
   GET_CHARACTERS_REQUEST_BEGIN,
   GET_CHARACTERS_REQUEST_ERROR,
   GET_CHARACTERS_REQUEST_SUCCESS,

   SET_CHARACTERS_NUMBER_OF_PAGES,
   SET_CHARACTERS_OFFSET,
   SET_CHARACTERS_DATA,
   SET_CHARACTERS_FILTERED_DATA,

   RESET_CHARACTERS_OFFSET,
   RESET_CHARACTERS_FILTERED_DATA
} from '../../actions/characters';

const defaultState = {
   data: [],
   filteredData: [],
   fetching: false,
   offset: 0,
   numberOfPages: 0,
   limit: 10
};

test('should setup default data', () => {
   const state = charactersReducer(undefined, { type: '@@INIT' });
   expect(state).toEqual(defaultState);
});

test(`${GET_CHARACTERS_REQUEST_BEGIN} - should set fetching to true`, () => {
   const state = charactersReducer(undefined, { type: GET_CHARACTERS_REQUEST_BEGIN });
   expect(state).toEqual({
      ...defaultState,
      fetching: true
   })
});

test(`${GET_CHARACTERS_REQUEST_ERROR} - should set fetching to false`, () => {
   const state = charactersReducer(undefined, { type: GET_CHARACTERS_REQUEST_ERROR });
   expect(state).toEqual(defaultState)
});

test(`${GET_CHARACTERS_REQUEST_SUCCESS} - should set fetch do false and set data to received value`, () => {
   const data = ['abcde', 'fghj'];
   const state = charactersReducer(undefined, { type: GET_CHARACTERS_REQUEST_SUCCESS, data });
   expect(state).toEqual({
      ...defaultState,
      data,
      fetching: false
   });
});

test(`${SET_CHARACTERS_NUMBER_OF_PAGES} - should set numberOfPages to received value`, () => {
   const numberOfPages = 5;
   const state = charactersReducer(undefined, { type: SET_CHARACTERS_NUMBER_OF_PAGES, numberOfPages });
   expect(state).toEqual({
      ...defaultState,
      numberOfPages
   });
});

test(`${SET_CHARACTERS_OFFSET} - should set offset to received value`, () => {
   const offset = 5;
   const state = charactersReducer(undefined, { type: SET_CHARACTERS_OFFSET, offset });
   expect(state).toEqual({
      ...defaultState,
      offset
   });
});

test(`${SET_CHARACTERS_DATA} - should set numberOfPages to received value`, () => {
   const numberOfPages = 5;
   const state = charactersReducer(undefined, { type: SET_CHARACTERS_NUMBER_OF_PAGES, numberOfPages });
   expect(state).toEqual({
      ...defaultState,
      numberOfPages
   });
});

test(`${SET_CHARACTERS_FILTERED_DATA} - should set filteredData to received value`, () => {
   const filteredData = [1, 2, 3];
   const state = charactersReducer(undefined, { type: SET_CHARACTERS_FILTERED_DATA, filteredData });
   expect(state).toEqual({
      ...defaultState,
      filteredData
   });
});

test(`${RESET_CHARACTERS_OFFSET} - should reset offset`, () => {
   const state = charactersReducer(undefined, { type: RESET_CHARACTERS_OFFSET });
   expect(state).toEqual({
      ...defaultState,
      offset: 0
   });
});

test(`${RESET_CHARACTERS_FILTERED_DATA} - should reset filteredData`, () => {
   const state = charactersReducer(undefined, { type: RESET_CHARACTERS_FILTERED_DATA });
   expect(state).toEqual({
      ...defaultState,
      filteredData: []
   });
});
