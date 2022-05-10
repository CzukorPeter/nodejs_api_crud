import { 
    GET_SETTLEMENTS, 
    ADD_SETTLEMENTS, 
    SET_LOADING, 
    SETTLEMENTS_ERROR
 } from "../actions/types";


const initialState = {
    settlements: null,
    loading: false,
    error: null
  };

  export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SETTLEMENTS:
          return {
            ...state,
            settlements: action.payload,
            loading: false
          };
        case ADD_SETTLEMENTS:
          return {
            ...state,
            settlements: [...state.settlements, action.payload],
            loading: false
          };
        case SET_LOADING:
          return {
            ...state,
            loading: true
          };
        case SETTLEMENTS_ERROR:
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