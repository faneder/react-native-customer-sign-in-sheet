import {
  CUSTOMER_UPDATE,
  CUSTOMER_CREATE_REQUEST,
  CUSTOMER_CREATE_SUCCESS,
  CUSTOMER_CREATE_FAIL,
  CUSTOMER_EDIT_SUCCESS,
  CUSTOMER_INIT
} from '../actions/types';

const INIT_STATE = {
    name: '',
    phone: '',
    shift: '',
    email: '',
    line: '',
    loading: false
}

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case CUSTOMER_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value};
        case CUSTOMER_CREATE_REQUEST:
            return {...state, loading: true};
        case CUSTOMER_CREATE_SUCCESS:
            return {...INIT_STATE, loading: false};
        case CUSTOMER_EDIT_SUCCESS:
            return { ...INIT_STATE, loading: false};
        case CUSTOMER_INIT:
            return INIT_STATE;
        default:
            return state;
    }
}