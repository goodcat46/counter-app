import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import Layout from 'components/Layout/Layout';
import AppRoutes from 'components/AppRoutes/AppRoutes';

import s from './App.module.scss';

const App = () => {
  return (
    <>
      <div className={s.app}>
        <Suspense fallback="Loadding ...">
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
        theme="light"
      />
    </>
  );
};

export default App;
