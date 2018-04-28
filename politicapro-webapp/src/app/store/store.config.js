import { createStore, applyMiddleware } from 'redux';
import rootReducer from './index.reducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; // <~~~ use in dev only
import thunk from 'redux-thunk';


export default function configStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
}