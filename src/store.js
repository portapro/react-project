import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';
import thunk from 'redux-thunk';
import { setStoreReference } from './helpers/store';

export function configureStore(preloadedState) {
    const store = createStore(
        reducer,
        preloadedState,
        applyMiddleware(thunk)
    );

    setStoreReference(store);

    return store;
}
