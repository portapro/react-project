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
            console.log("USERS_FETCH_REQUEST");
            return { ...state, isFetching: true };
        case cnt.USERS_FETCH_SUCCESS:
            console.log("USERS_FETCH_SUCCESS");
            console.log({ ...state, ...payload });
            return { ...state, ...payload, isFetching: false };
        case cnt.USERS_FETCH_ERROR:
            return { ...state, isError: true };
        default:
                console.log("default");
            return state;
    }
};