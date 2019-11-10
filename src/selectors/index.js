import { getStoreState } from '../helpers/store';
import { get } from 'lodash';

export const users = () => get(getStoreState(), 'users');