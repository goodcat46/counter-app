import { lazy } from 'react';

const PageNotFound = lazy(() => import('./PageNotFound'));
const PageError = lazy(() => import('./PageError'));
const PageTransactions = lazy(() => import('./PageTransactions'));

const AppPages = { PageTransactions, PageNotFound, PageError };

export default AppPages;
