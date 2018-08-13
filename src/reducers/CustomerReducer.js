import {
  CUSTOMER_FETCH_REQUEST,
  CUSTOMER_FETCH_SUCCESS,
  CUSTOMER_FETCH_FAIL,
} from '../actions/types';

const INIT_STATE = {
    customer: {},
    loading: false
}

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case CUSTOMER_FETCH_REQUEST:
            return {...state, loading: true};
        case CUSTOMER_FETCH_SUCCESS:
            return { ...state, customer: action.payload, loading: false};
        default:
            return state;
    }
}