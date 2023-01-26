import { Suspense } from 'react';
import Layout from 'components/Layout/Layout';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import AppRoutes from 'components/AppRoutes/AppRoutes';
import { useModal } from 'components/ModalCustom/ModalComponent';

import s from './App.module.scss';

const App = () => {
  const modal = useModal();

  const modalContent = <div>Модалка</div>;

  return (
    <>
      <div className={s.app}>
        <Suspense fallback="Loadding ...">
          <Layout>
            <AppRoutes />

            <div style={{ margin: 'auto' }}>
              <ButtonIcon
                styleType="BrandClrBtn"
                onClick={ev => modal.handleToggleModal(ev, modalContent, { defaultBtn: true })}
              >
                Відкрити модалку
              </ButtonIcon>
            </div>
          </Layout>
        </Suspense>
      </div>
    </>
  );
};

export default App;
