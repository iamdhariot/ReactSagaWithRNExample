import createSagaMiddleware from '@redux-saga/core';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducers';
import {handler as userSaga} from './sagas/userSaga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(userSaga);
export {store};
