import { createConnector, createSelector } from './helpers';

import {
    fetchUsers,
    addUser,
    editUser,
    removeUser
} from './actions';
import {
    data, isFetching, isError
} from './selectors/users';

export const usersConnector = createConnector(null, {
    fetchUsers,
    addUser
});

const usersSelector = createSelector(
    [data, isFetching, isError],
    (data, isFetching, isError) => ({
        data: data,
        isFetching,
        isError
    })
);

export const usersListConnector = createConnector(usersSelector, {
    editUser,
    removeUser
});
