import axios from 'axios';
import { parseCharactersResultFromWs } from '../middlewares/characters';

export const GET_CHARACTERS_REQUEST_BEGIN = 'GET_CHARACTERS_REQUEST_BEGIN';
export const GET_CHARACTERS_REQUEST_ERROR = 'GET_CHARACTERS_REQUEST_ERROR';
export const GET_CHARACTERS_REQUEST_SUCCESS = 'GET_CHARACTERS_REQUEST_SUCCESS';

export const SET_CHARACTERS_DATA = 'SET_CHARACTERS_DATA';
export const SET_CHARACTERS_OFFSET = 'SET_CHARACTERS_OFFSET';
export const SET_CHARACTERS_NUMBER_OF_PAGES = 'SET_CHARACTERS_NUMBER_OF_PAGES';
export const SET_CHARACTERS_FILTERED_DATA = 'SET_CHARACTERS_FILTERED_DATA';

export const RESET_CHARACTERS_OFFSET = 'RESET_CHARACTERS_OFFSET';
export const RESET_CHARACTERS_FILTERED_DATA = 'RESET_CHARACTERS_FILTERED_DATA';

const WEBSERVICE_CHARACTERS = 'https://www.breakingbadapi.com/api/characters';

export const startGetAllCharactersFromWs = () => {
   return (dispatch) => {
      const getCharactersFromWs =
         axios.get(WEBSERVICE_CHARACTERS);      
      dispatch({ type: GET_CHARACTERS_REQUEST_BEGIN });

      return getCharactersFromWs.then(({data}) => {
         dispatch(getCharactersSuccess(data));
      });
   }
}

export const getCharactersError = (error) => ({
   type: GET_CHARACTERS_REQUEST_ERROR,
   error
});

export const getCharactersSuccess = (data) => ({
   type: GET_CHARACTERS_REQUEST_SUCCESS,
   data: parseCharactersResultFromWs(data)
});

export const setCharactersOffset = (offset) => ({
   type: SET_CHARACTERS_OFFSET,
   offset
});

export const resetCharactersOffset = () => ({
   type: RESET_CHARACTERS_OFFSET
});

export const setCharactersNumberOfPages = (numberOfPages) => ({
   type: SET_CHARACTERS_NUMBER_OF_PAGES,
   numberOfPages
});

export const setCharactersData = (data) => ({
   type: SET_CHARACTERS_DATA,
   data
});

export const setCharactersFilteredData = (filteredData) => ({
   type: SET_CHARACTERS_FILTERED_DATA,
   filteredData
});

export const resetCharactersFilteredData = () => ({
   type: RESET_CHARACTERS_FILTERED_DATA
});

export const startGetCharactersFromWs = (
   {limit = 10, offset = 1, name = '', status = ''},
   shouldCleanData = false
) => {
   return (dispatch) => {
      const getCharactersFromWs =
         axios.get(normalizeCharactersWebserviceUrl({
            limit, offset, name, status
         }));

      dispatch({ type: GET_CHARACTERS_REQUEST_BEGIN });

      return getCharactersFromWs.then(({data}) => {
         if (!shouldCleanData) {
            dispatch(getCharactersSuccess(data));
            dispatch(setCharactersHasMoreData(data.length === limit));
         } else {
            dispatch(setCharactersData([]));
            dispatch(setCharactersOffset(0));
            dispatch(getCharactersSuccess(data));
         }
      }).catch((error) => dispatch(getCharactersError(error)));
   }
};

const normalizeCharactersWebserviceUrl = ({limit = 10, offset = 1, name = '', status = ''}) => {
   const limitQuery = `?limit=${limit}`;
   const offsetQuery = `&offset=${offset > 1 ? offset * 10 : offset}`;
   const nameQuery = name !== '' ? `&name=${name.replaceAll(' ', '+')}` : '';
   const statusQuery = status !== '' ? `&status=${status}` : '';

   return `${WEBSERVICE_CHARACTERS}${limitQuery}${offsetQuery}${nameQuery}${statusQuery}`;
};
