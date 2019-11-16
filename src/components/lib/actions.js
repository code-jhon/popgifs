import * as actionTypes from './actionTypes';
import * as giphy from './giphy';

/** Thunks */
export const getSearch = term => async dispatch => {
  dispatch({
    type: actionTypes.SEARCH_REQUEST
  });
  try {
    const results = await giphy.search(term);
    dispatch({
      type : actionTypes.SEARCH_SUCCESS,
      payload: results
    })
  } catch (e) {
    dispatch({
      type: actionTypes.SEARCH_FAILURE,
      payload: e
    })
  }
}