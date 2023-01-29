import { Suspense } from 'react';

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
    </>
  );
};

export default App;
