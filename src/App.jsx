import { Suspense } from 'react';
import Layout from 'components/Layout/Layout';
import AppRoutes from 'components/AppRoutes/AppRoutes';
import { useModal } from 'components/ModalCustom/ModalComponent';
import FormTransaction from 'components/FormTransaction/FormTransaction';
import { Button } from '@mui/material';

import s from './App.module.scss';
import SvgIcon from 'components/SvgIcon/SvgIcon';

const App = () => {
  const modal = useModal();

  const modalContent = <FormTransaction />;

  return (
    <>
      <div className={s.app}>
        <Suspense fallback="Loadding ...">
          <Layout>
            <AppRoutes />

            <div style={{ margin: '8px auto' }}>
              <Button
                variant="contained"
                onClick={ev => modal.handleToggleModal(ev, modalContent, { defaultBtn: true })}
              >
                <SvgIcon iconId="plus" />
                <span style={{ margin: 'auto 8px' }}>Створити транзакції</span>
              </Button>
            </div>
          </Layout>
        </Suspense>
      </div>
    </>
  );
};

export default App;
