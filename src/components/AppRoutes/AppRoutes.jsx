import { Routes, Route, Navigate } from 'react-router-dom';

// import { useSelector } from 'react-redux';
// import { getUserData } from 'redux/selectors';
import AppPages from 'components/AppPages';
import { appPages } from 'data';

// import MobileFooter from 'components/Layout/MobileFooter/MobileFooter';
// import DesktopFooter from 'components/Layout/DesktopFooter/DesktopFooter';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

const { PageError, PageNotFound } = AppPages;

const AppRoutes = () => {
  // const user = useSelector(getUserData);

  return (
    <>
      <Routes>
        <Route index element={<Navigate to={appPages.transactions.path} />} errorElement={<PageError />} />
        <Route
          path="/"
          element={<AppPages.AppGridPage path={appPages.transactions.path} />}
          errorElement={<PageError />}
        >
          <Route
            index
            element={<AppPages.PageTransactions path={appPages.transactions.path} />}
            errorElement={<PageError />}
          />
          <Route
            path={appPages.transactions.path}
            element={<AppPages.PageTransactions path={appPages.transactions.path} />}
            errorElement={<PageError />}
          />
        </Route>

        <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
