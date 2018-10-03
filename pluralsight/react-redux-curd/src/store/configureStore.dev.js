import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';


export default function configureStore(initailState) {
  return createStore(
    rootReducer,
    initailState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
