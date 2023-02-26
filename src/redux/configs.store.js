import storage from 'redux-persist/lib/storage';

export const presistorConfigs = {
  auth: {
    key: 'token',
    storage,
    whitelist: ['token'],
  },
  appSettings: {
    key: 'appSettings',
    storage,
    whitelist: ['isDarkMode'],
  },
  pageSettings: {
    key: 'appPage',
    storage,
    whitelist: ['pageGrid'],
  },
  categories: {
    key: 'categories',
    storage,
    whitelist: ['categories'],
  },
  counts: {
    key: 'counts',
    storage,
    whitelist: ['counts'],
  },
  transactions: {
    key: 'transactions',
    storage,
    whitelist: ['transactions'],
  },
};
