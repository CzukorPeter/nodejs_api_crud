import { combineReducers } from 'redux';
import partnerReducer from './partnerReducer';

export default combineReducers({
    partner: partnerReducer

});