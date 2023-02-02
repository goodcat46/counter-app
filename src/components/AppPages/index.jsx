import { lazy } from 'react';

const PageNotFound = lazy(() => import('./PageNotFound/PageNotFound'));
const PageError = lazy(() => import('./PageError/PageError'));
const PageTransactions = lazy(() => import('./PageTransactions/PageTransactions'));
const PageAuth = lazy(() => import('./PageAuth/PageAuth'));
const PageCounts = lazy(() => import('./PageCounts/PageCounts'));

const AppPages = { PageTransactions, PageNotFound, PageError, PageAuth, PageCounts };

export default AppPages;
// export let PagesMap = {
//   Main: PageMain,
//   Admin: PageAdmin,
//   Raports: PageStatistics,
//   Settings: PageSettings,
//   CounterParty: PageCounterParty,
//   Returns: PageReturns,
//   Orders: PageOrders,
//   Products: PageProducts,
//   Manager: PageManager,
//   Vendor: PageVendor,
//   LogOut: PageLogOut,
//   NotFound: PageNotFound,
//   Error: PageError,
//   Mobile: AppMobilePage,
// };
// export let pagesMapLowerCase = {
//   tasks: PageMain,
//   admin: PageAdmin,
//   raports: PageStatistics,
//   directories: PageDirectories,
//   counterParty: PageCounterParty,
//   returns: PageReturns,
//   orders: PageOrders,
//   products: PageProducts,
//   manager: PageManager,
//   vendor: PageVendor,
//   logOut: PageLogOut,
//   notFound: PageNotFound,
//   error: PageError,
//   mobile: AppMobilePage,
// };

// const PageProducts = lazy(() => import('./PageProducts'));
// const PageOrders = lazy(() => import('./PageOrders'));
// const PageRefunds = lazy(() => import('./PageRefunds'));
// const PageCounterParty = lazy(() => import('./PageCounterParty'));
// const PageDirectories = lazy(() => import('./PageDirectories'));
// const PageStatistics = lazy(() => import('./PageStatistics'));
// const PageManager = lazy(() => import('./PageManager'));
// const PageVendor = lazy(() => import('./PageVendor'));
// const PageAdmin = lazy(() => import('./PageAdmin'));
