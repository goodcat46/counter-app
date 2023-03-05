import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';

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
  organization: {
    key: 'organization',
    storage: storageSession,
    whitelist: ['organization'],
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
