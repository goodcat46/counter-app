import { Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Layout from 'components/Layout/Layout';
import AppRoutes from 'components/AppRoutes/AppRoutes';

import s from './App.module.scss';
import { useSelector } from 'react-redux';
import { getAppSettings } from 'redux/selectors.store';
import AppLoader from 'components/AppLoader/AppLoader';

const App = () => {
  const { isDarkTheme } = useSelector(getAppSettings);

  useEffect(() => {
    const body = document.querySelector('body');
    if (isDarkTheme) {
      body.classList.remove('Light');
      body.classList.add('Dark');
      return;
    }
    if (!isDarkTheme) {
      body.classList.remove('Dark');
      body.classList.add('Light');
      return;
    }
  });
  return (
    <>
      <div className={[isDarkTheme ? s.appDark : s.app]}>
        <Suspense fallback={<AppLoader isLoading />}>
          <Layout>
            <AppRoutes />
          </Layout>
        </Suspense>
      </div>

      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        limit={7}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkTheme ? 'light' : 'dark'}
      />
    </>
  );
};

export default App;
