import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/index';
import { initialState } from './state';

const store = createStore(rootReducer, initialState as any, applyMiddleware(thunk));

export default store;
