import React from 'react';

export const UsersListComponent = (props) => {
    const { data, isFetching, editUser, removeUser } = props;

    if (isFetching) {
        return <div>Loading...</div>;
    }

    if (Object.keys(data).length > 0) {
        return (
            <div>
                { data.map((user, index) => (
                    <div key={index}>
                            { user.id }: { user.name }, { user.email } 
                            <input type='button' value="Edit" onClick={editUser} />
                            <input type='button' value="Delete" onClick={removeUser} />
                    </div>
                )) }
            </div>
        )
    } else {
        return null;
    }
};
