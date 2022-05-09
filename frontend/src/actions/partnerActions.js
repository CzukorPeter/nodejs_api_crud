import {
GET_PARTNERS, 
ADD_PARTNER,
DELETE_PARTNER,
SET_CURRENT,
CLEAR_CURRENT,
UPDATE_PARTNER,
CLEAR_PARTNERS,
SET_LOADING,
PARTNERS_ERROR,
SEARCH_PARTNERS,
  } from './types';

// Get partners from server
export const getPartners = () => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch('/partners');
      const data = await res.json();
  
      dispatch({
        type: GET_PARTNERS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: PARTNERS_ERROR,
        payload: err.response.statusText
      });
    }
  };

// Set loading to true
export const setLoading = () => {
    return {
      type: SET_LOADING
    };
  };