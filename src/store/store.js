import { configureStore ,combineReducers} from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({ loginSlice: loginSlice }));

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
});

const persistedStore = persistStore(store);

export { store, persistedStore };
