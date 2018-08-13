import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CustomerFormReducer from './CustomerFormReducer';
import CustomerReducer from './CustomerReducer';

export default combineReducers({
	auth: AuthReducer,
	customerForm: CustomerFormReducer,
	customer: CustomerReducer,
});
