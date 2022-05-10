import {
GET_PARTNERS, 
ADD_PARTNER,
DELETE_PARTNER,
SET_CURRENT,
CLEAR_CURRENT,
UPDATE_PARTNER,
SET_LOADING,
PARTNERS_ERROR
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

  // Add new partner
export const addPartner = partner => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/partners', {
      method: 'POST',
      body: JSON.stringify(partner),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_PARTNER,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: PARTNERS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Delete partner from server
export const deletePartner = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/partners/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_PARTNER,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: PARTNERS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Update partner on server
export const updatePartner = partner => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/partners/${partner.id}`, {
      method: 'PATCH',
      body: JSON.stringify(partner),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_PARTNER,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: PARTNERS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set current partner
export const setCurrent = partner => {
  return {
    type: SET_CURRENT,
    payload: partner
  };
};

// Clear current partner
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// Set loading to true
export const setLoading = () => {
    return {
      type: SET_LOADING
    };
  };