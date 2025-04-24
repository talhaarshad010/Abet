import {createStore, applyMiddleware} from 'redux';
import createThunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import routReducers from './reducer';
// import persistReducer from 'redux-persist/es/persistReducer';
import reducer from './reducer';

const loggerMiddleware = createLogger();

const rootReducer = reducer;

const ThunkMiddleware = createThunkMiddleware;
const middlewares = [ThunkMiddleware];

middlewares.push(loggerMiddleware);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStoreWithMiddleware = applyMiddleware(...middlewares);

export const store = createStore(persistedReducer, createStoreWithMiddleware);

export const persistor = persistStore(store);
