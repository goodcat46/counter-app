import { Routes, Route } from 'react-router-dom';
import AppGridPage from 'components/AppPages/AppGridPage/AppGridPage';
// import { useSelector } from 'react-redux';
// import { getUserData } from 'redux/selectors';
import AppPages from 'components/AppPages';

// import MobileFooter from 'components/Layout/MobileFooter/MobileFooter';
// import DesktopFooter from 'components/Layout/DesktopFooter/DesktopFooter';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';
const { PageError, PageNotFound } = AppPages;

const AppRoutes = () => {
  // const auth = useSelector(getUserData);

  return (
    <>
      <Routes>
        {/* <Route index element={<Navigate to={'/'} />} errorElement={<PageError />} /> */}
        <Route path="/" element={<AppGridPage path="transactions" />} errorElement={<PageError />}>
          <Route index element={<AppPages.PageTransactions path="transactions" />} errorElement={<PageError />} />
          <Route
            path="transactions"
            element={<AppPages.PageTransactions path="transactions" />}
            errorElement={<PageError />}
          />
          <Route path="counts" element={<AppPages.PageCounts path="counts" />} errorElement={<PageError />} />
        </Route>

        <Route path="*" element={<PageNotFound />} errorElement={<PageError />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
