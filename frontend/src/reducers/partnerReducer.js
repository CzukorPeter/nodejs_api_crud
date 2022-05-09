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
    } from '../actions/types';

const initialState = {
    partners: null,
    current: null,
    loading: false,
    error: null
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_PARTNERS:
      return {
        ...state,
        partners: action.payload,
        loading: false
      };
      case ADD_PARTNER:
        return {
          ...state,
          partners: [...state.partners, action.payload],
          loading: false
        };
      case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case PARTNERS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
      default:
        return state
    }
  };