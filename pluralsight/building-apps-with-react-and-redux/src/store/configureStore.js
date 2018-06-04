import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInveriant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(reduxImmutableStateInveriant()));
}
