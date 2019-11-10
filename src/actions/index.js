import { createAction } from '../helpers';
import * as cnt from './constants';
import { usersMock } from '../services';

export const fetchUsersRequest = createAction(cnt.USERS_FETCH_REQUEST);
export const fetchUsersSuccess = createAction(cnt.USERS_FETCH_SUCCESS);
export const fetchUsersError = createAction(cnt.USERS_FETCH_ERROR);

export const addUser = createAction(cnt.USERS_ADD);
export const editUser = createAction(cnt.USERS_EDIT);
export const removeUser = createAction(cnt.USERS_REMOVE);


export const fetchUsers = () => dispatch => {

    dispatch(fetchUsersRequest());

    new Promise((resolve) => {
        setTimeout(() => {
            resolve(usersMock);
        }, 2000);
    }).then(usersResponse => dispatch(fetchUsersSuccess(usersResponse)))
};