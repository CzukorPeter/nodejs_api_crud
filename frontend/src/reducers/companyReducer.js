import { 
    GET_COMPANYFORMS, 
    ADD_COMPANYFORM, 
    SET_LOADING, 
    COMPANYFORMS_ERROR
 } from "../actions/types";


const initialState = {
    companyforms: null,
    loading: false,
    error: null
  };

  export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPANYFORMS:
          return {
            ...state,
            companyforms: action.payload,
            loading: false
          };
        case ADD_COMPANYFORM:
          return {
            ...state,
            companyforms: [...state.companyforms, action.payload],
            loading: false
          };
        case SET_LOADING:
          return {
            ...state,
            loading: true
          };
        case COMPANYFORMS_ERROR:
          console.error(action.payload);
          return {
            ...state,
            error: action.payload,
            loading: false
          };
        default:
          return state;
      }
    };