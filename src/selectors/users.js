import { get } from 'lodash';
import { createSelector } from '../helpers';
import { users } from './index';

export const data = createSelector(
    users,
    user => get(user, 'data')
);

export const isFetching = createSelector(
    users,
    user => get(user, 'isFetching')
);

export const isError = createSelector(
    users,
    user => get(user, 'isError')
);
