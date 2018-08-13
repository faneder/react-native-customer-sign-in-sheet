import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
} from '../actions/types';

const INIT_STATE = { 
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload, error: '' };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload, error: '' };
        case LOGIN_USER_REQUEST:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, ...INIT_STATE };
        case LOGIN_USER_FAIL:
            return { ...state, error: action.payload.message, password: '', loading: false };
        default:
            return state;
    }
}