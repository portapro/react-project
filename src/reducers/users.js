import * as cnt from '../actions/constants';

const initialState = {
    data: {},
    isFetching: false,
    isError: false
};

export const users = (state = initialState, {type, payload}) => {
    console.log(type, payload);
    switch(type) {
        case cnt.USERS_FETCH_REQUEST:
            return { ...state, isFetching: true };
        case cnt.USERS_FETCH_SUCCESS:
            return { ...state, ...payload, isFetching: false };
        case cnt.USERS_FETCH_ERROR:
            return { ...state, isError: true };
        default:
            return state;
    }
};