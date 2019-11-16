import * as actionTypes from './actionTypes';

const initialState = {
  results : {
    entries : [],
  }
}

export default (state = initialState, action) => {
  /** Reducer */
  switch (action.type) {

    case actionTypes.SEARCH_REQUEST:
      return state;

    case actionTypes.SEARCH_SUCCESS:
      return {
        ...state, results: {...state.results, entries: [...state.results.entries, action.payload]}
      };

    case actionTypes.SEARCH_FAILURE:
      return state;

    case actionTypes.HELLO:
      return state;

    default:
      return state;
  }

}