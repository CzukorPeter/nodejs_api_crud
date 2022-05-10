import { 
  GET_COMPANYFORMS, 
  ADD_COMPANYFORM, 
  SET_LOADING, 
  COMPANYFORMS_ERROR
 } from "./types";


// Get company forms from server
export const getCompanyforms = () => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch('/companyforms');
      const data = await res.json();
  
      dispatch({
        type: GET_COMPANYFORMS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: COMPANYFORMS_ERROR,
        payload: err.response.statusText
      });
    }
  };
  // Add new company form
export const addCompanyform = companyform => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/companyforms', {
      method: 'POST',
      body: JSON.stringify(companyform),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_COMPANYFORM,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: COMPANYFORMS_ERROR,
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