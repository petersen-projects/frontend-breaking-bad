import {
   SET_FILTER_NAME,
   SET_FILTER_STATUS
} from '../actions/filters';

const filtersReducerDefaultState = {
   name: "",
   status: ""
};

export default (state = filtersReducerDefaultState, action) => {
   switch(action.type) {
      case SET_FILTER_NAME:
            return {
               ...state,
               name: action.name
            };
      case SET_FILTER_STATUS:
         return {
            ...state,
            status: action.status
         };
      default:
         return state;
   }
};
