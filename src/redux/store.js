import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
// import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import { appPageSlice } from './page/pageSlice';
import { authSlice } from './auth/authSlice';
import { usersSlice } from './users/usersSlice';
import { appSettingsSlice } from './appSettings/appSettingsSlice';
import { transactionsSlice } from './transactions/transactions.slice';
import { categoriesSlice } from './categories/categoriesSlice';
import { countsSlice } from './counts/counts.slice';
import { documentsSlice } from './documents/documents.slice';

const persistUserConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
const persistAppSettingsConfig = {
  key: 'appSettings',
  storage,
  whitelist: ['isDarkTheme'],
};
const persistPageSettingsConfig = {
  key: 'appPage',
  storage,
  whitelist: ['pageGrid'],
};

const rootReducer = combineReducers({
  [authSlice.name]: persistReducer(persistUserConfig, authSlice.reducer),
  [usersSlice.name]: usersSlice.reducer,
  [appSettingsSlice.name]: persistReducer(persistAppSettingsConfig, appSettingsSlice.reducer),
  [appPageSlice.name]: persistReducer(persistPageSettingsConfig, appPageSlice.reducer),
  [transactionsSlice.name]: transactionsSlice.reducer,
  [categoriesSlice.name]: categoriesSlice.reducer,
  [countsSlice.name]: countsSlice.reducer,
  [documentsSlice.name]: documentsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
