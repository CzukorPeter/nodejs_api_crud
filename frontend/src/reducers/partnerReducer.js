import {
  GET_PARTNERS, 
  ADD_PARTNER,
  DELETE_PARTNER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PARTNER,
  SET_LOADING,
  PARTNERS_ERROR,
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
      case DELETE_PARTNER:
        return {
          ...state,
          partners: state.partners.filter(partner => partner.id !== action.payload),
          loading: false
        };
      case UPDATE_PARTNER:
        return {
          ...state,
          partners: state.partners.map(partner =>
            partner.id === partner.payload.id ? action.payload : partner
          )
        };
      case SET_CURRENT:
        return {
          ...state,
          current: action.payload
        };
      case CLEAR_CURRENT:
        return {
          ...state,
          current: null
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