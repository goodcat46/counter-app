import { Suspense } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import Layout from 'components/Layout/Layout';
import AppRoutes from 'components/AppRoutes/AppRoutes';
import FormTransaction from 'components/FormTransaction/FormTransaction';
import { Button } from '@mui/material';
import ModalContent from 'components/ModalContent/ModalContent';

import s from './App.module.scss';

const App = () => {
  return (
    <>
      <div className={s.app}>
        <Suspense fallback="Loadding ...">
          <Layout>
            <AppRoutes />

            <div style={{ margin: '8px auto' }}>
              <ModalContent
                trigger={props => (
                  <Button variant="contained" {...props}>
                    <SvgIcon iconId="plus" />
                    <span style={{ margin: 'auto 8px' }}>Створити транзакції</span>
                  </Button>
                )}
              >
                <FormTransaction />
              </ModalContent>
            </div>
          </Layout>
        </Suspense>
      </div>
    </>
  );
};

export default App;
