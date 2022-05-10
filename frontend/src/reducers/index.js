import { combineReducers } from 'redux';
import partnerReducer from './partnerReducer';
import settlementReducer from './settlementReducer';
import companyReducer from './companyReducer';

export default combineReducers({
    partner: partnerReducer,
    settlement: settlementReducer,
    companyform: companyReducer

});