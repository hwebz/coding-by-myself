import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';


export default function configureStore(initailState) {
  return createStore(
    rootReducer,
    initailState,
    applyMiddleware(thunk)
  );
}
