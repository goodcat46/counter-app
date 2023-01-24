import Layout from 'components/Layout/Layout';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useModal } from 'components/ModalCustom/ModalComponent';
import s from './App.module.scss';

const App = () => {
  const modal = useModal();

  const modalContent = <div>Модалка</div>;

  return (
    <>
      <div className={s.app}>
        <Layout>
          <div style={{ margin: 'auto' }}>
            <ButtonIcon
              styleType="BrandClrBtn"
              onClick={ev => modal.handleToggleModal(ev, modalContent, { defaultBtn: true })}
            >
              Відкрити модалку
            </ButtonIcon>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default App;
