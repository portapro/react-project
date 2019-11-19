import React from 'react';
import ModalDelete from "../modal/ModalDelete";
import useModal from '../modal/useModal';

export const UsersListComponent = (props) => {
    const { data, isFetching, editUser, removeUser } = props;
    const {isShow, toggle} = useModal();


    if (isFetching) {
        return <div>Loading...</div>;
    }

    if (Object.keys(data).length > 0) {
        return (
            <div>
                { data.map((user, index) => (
                    <div className={'users-list'} key={index}>
                            <div className={'user-id'}>{ user.id }</div>
                            <div className={'user-name'}>{ user.name }</div>
                            <div className={'user-email'}>{ user.email }</div>
                            <div className={'edit'}><input type='button' value="Edit" onClick={editUser} /></div>
                            <div className={'delete'}><input type='button' value="Delete" onClick={toggle} /></div>
                    </div>
                )) }

                <ModalDelete
                    isShow={isShow}
                    toggle={toggle}
                    removeUser={removeUser}
                />
            </div>
            

        )
    } else {
        return null;
    }
};
