export const SET_FILTER_NAME = 'SET_FILTER_NAME';
export const SET_FILTER_STATUS = 'SET_FILTER_STATUS';

export const setNameFilter = (name = '') => ({
   type: SET_FILTER_NAME,
   name
});

export const setCharacterStatusFilter = (status = '') => ({
   type: SET_FILTER_STATUS,
   status
});
