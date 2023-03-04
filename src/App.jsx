import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import Layout from 'components/Layout/Layout';
import AppRoutes from 'components/AppRoutes/AppRoutes';

import s from './App.module.scss';
import { useSelector } from 'react-redux';
import { getAppSettings } from 'redux/selectors.store';
import AppLoader from 'components/AppLoader/AppLoader';
import SideBarProvider from 'components/Layout/SideBarLeft/SideBarProvider';

const App = () => {
  const { isDarkMode } = useSelector(getAppSettings);

  // useEffect(() => {
  //   const body = document.querySelector('body');
  //   if (isDarkMode) {
  //     body.classList.remove('Light');
  //     body.classList.add('Dark');
  //     return;
  //   }
  //   if (!isDarkMode) {
  //     body.classList.remove('Dark');
  //     body.classList.add('Light');
  //     return;
  //   }
  // });
  return (
    <>
      <div className={s.app}>
        <Suspense fallback={<AppLoader isLoading />}>
          <SideBarProvider>
            <Layout>
              <AppRoutes />
            </Layout>
          </SideBarProvider>
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
        theme={isDarkMode ? 'light' : 'dark'}
      />
    </>
  );
};

export default App;
