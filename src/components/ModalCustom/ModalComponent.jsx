import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalPortal from './ModalPortal/ModalPortal';
import SvgIconClose from './SvgIconClose/SvgIconClose';

import s from './ModalCustom.module.scss';

//* ""handleToggle"" функція яка тоглить стейт модалки
//* ""defaultBtn"" BOOLEAN чи потрібна дефолтна кнопка закриття
//* ""children"" вміст модалки
export const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

const modalInitialSettings = {
  style: null,
  backdropClass: s.Backdrop,
  backdropStyle: null,
  modalClass: s.Modal,
  modalStyle: null,
  defaultBtn: false,
};

const ModalComponent = ({ children, portal = 'modal' }) => {
  const [modalSettins, setModalSettings] = useState(modalInitialSettings);
  const [modalContent, setModalContent] = useState(null);

  function handleToggleModal(ev, content, settings) {
    if (!content) {
      setModalSettings(modalInitialSettings);
      setModalContent(null);
      return;
    }
    setModalSettings({ ...modalSettins, ...settings });
    setModalContent(content);
  }
  function handleCloseModalBackdrop(evt) {
    let { target, currentTarget } = evt;

    if (target === currentTarget) {
      handleToggleModal();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleToggleModalByEsc);

    function handleToggleModalByEsc(evt) {
      let { code } = evt;

      if (code === 'Escape') {
        setModalSettings(modalInitialSettings);
        setModalContent(null);
        console.log('Escape');
        document.querySelector('body').classList.remove('NotScroll');
        window.removeEventListener('keydown', handleToggleModalByEsc);
      }
    }

    if (modalContent) {
      document.querySelector('body').classList.add('NotScroll');
    }

    return () => {
      document.querySelector('body').classList.remove('NotScroll');
      window.removeEventListener('keydown', handleToggleModalByEsc);
    };
  }, [modalContent]);

  return (
    <>
      <ModalContext.Provider value={{ modalContent, modalSettins, handleToggleModal }}>
        <>{children}</>
        <ModalPortal portal={portal}>
          {modalContent && (
            <div className={modalSettins?.backdropClass} onClick={handleCloseModalBackdrop}>
              <div className={modalSettins?.modalClass} style={modalSettins?.modalStyle}>
                {modalSettins.defaultBtn && (
                  <button className={s.closeModal} onClick={handleToggleModal}>
                    <SvgIconClose size={'100%'} />
                  </button>
                )}
                {modalContent}
              </div>
            </div>
          )}
        </ModalPortal>
      </ModalContext.Provider>
    </>
  );
};

ModalComponent.propTypes = {
  isOpenModal: PropTypes.bool,
  handleToggle: PropTypes.func,
  defaultBtn: PropTypes.bool,
  // ! children: PropTypes.typeOf([]),
};

export default ModalComponent;
