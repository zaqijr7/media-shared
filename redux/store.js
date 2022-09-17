import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import counterReducer from './reducers/counterSlice';

const reducers = combineReducers({
  counter: counterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
  whitelist: ['counter'],
};

const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
  reducer: persistedReducer,
});
