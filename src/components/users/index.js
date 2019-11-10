import React, { useEffect } from 'react';
import { UsersListComponent } from './user-list';
import { usersListConnector } from '../../connector';

const UsersList = usersListConnector(UsersListComponent);

export const Users = (props) => {
    const {fetchUsers, addUser} = props;

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <div>
            <input type='button' value="addUser" onClick={addUser} />
            <UsersList />
        </div>
    );
};
