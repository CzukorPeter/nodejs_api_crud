import { combineReducers } from 'redux';
import partnerReducer from './partnerReducer';
import settlementReducer from './settlementReducer';

export default combineReducers({
    partner: partnerReducer,
    settlement: settlementReducer

});