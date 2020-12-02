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
} from '../actions/characters';

const charactersReducerDefaultState = {
   data: [],
   filteredData: [],
   fetching: false,
   offset: 0,
   numberOfPages: 0,
   limit: 10
};

export default (state = charactersReducerDefaultState, action) => {
   switch(action.type) {
      case GET_CHARACTERS_REQUEST_BEGIN:
         return {
            ...state,
            fetching: true
         };
      case GET_CHARACTERS_REQUEST_SUCCESS:
         return {
            ...state,
            data: [...state.data, ...action.data],
            fetching: false
         };
      case GET_CHARACTERS_REQUEST_ERROR:
         return {
            ...state,
            data: [],
            fetching: false
         };
      case SET_CHARACTERS_OFFSET:
         return {
            ...state,
            offset: action.offset
         };
      case SET_CHARACTERS_NUMBER_OF_PAGES:
         return {
            ...state,
            numberOfPages: action.numberOfPages
         };
      case SET_CHARACTERS_DATA:
         return {
            ...state,
            data: action.data
         };
      case SET_CHARACTERS_FILTERED_DATA:
         return {
            ...state,
            filteredData: [...state.filteredData, ...action.filteredData]
         }
      case RESET_CHARACTERS_OFFSET:
         return {
            ...state,
            offset: 0
         }
      case RESET_CHARACTERS_FILTERED_DATA:
         return {
            ...state,
            filteredData: []
         }
      default:
         return state;
   }
};
