import React from 'react';
import './App.css';

import { usersConnector } from './connector';
import { Users } from './components/users';


const UsersContainer = usersConnector(Users);

export const App = () => {
    return (
        <div className="app">
            <UsersContainer />
        </div>
    );
};
