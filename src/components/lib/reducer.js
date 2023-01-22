import * as actionTypes from './actionTypes';

const initialState = {
  results : [],
  selected : []
}

export default (state = initialState, action) => {
  /** Reducer */
  switch (action.type) {

    case actionTypes.SEARCH_REQUEST:
      return state;
    case actionTypes.SEARCH_SUCCESS:
      return {
        ...state, results: action.payload
      };
    case actionTypes.SEARCH_FAILURE:
      return state;
    
    case actionTypes.SEARCH_ID_REQUEST:
      return state;
    case actionTypes.SEARCH_ID_SUCCESS:
      return {
        ...state, selected: action.payload
      };
    case actionTypes.SEARCH_ID_FAILURE:
      return state;

    default:
      return state;
  }

}