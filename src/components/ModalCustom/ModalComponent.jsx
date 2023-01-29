import React, { useState, useEffect } from 'react';

import SvgIconClose from './SvgIconClose/SvgIconClose';

import s from './ModalCustom.module.scss';

//* ""handleToggle"" функція яка тоглить стейт модалки
//* ""defaultBtn"" BOOLEAN чи потрібна дефолтна кнопка закриття
//* ""children"" вміст модалки

const modalInitialSettings = {
  style: null,
  backdropClass: s.Backdrop,
  backdropStyle: null,
  modalClass: s.Modal,
  modalStyle: null,
  closeBtnClass: '',
  closeBtnStyle: null,
  closeBtn: true,
};

const ModalComponent = ({ idx, children, settings, handleCloseModalBackdrop, handleToggleModal }) => {
  const [modalSettins] = useState(settings || modalInitialSettings);

  useEffect(() => {
    function handleToggleModalByEsc(evt) {
      let { code } = evt;
      if (code === 'Escape') {
        handleToggleModal(idx);

        console.log('Escape');
        document.querySelector('body').classList.remove('NotScroll');
        window.removeEventListener('keydown', handleToggleModalByEsc);
      }
    }

    if (children) {
      document.querySelector('body').classList.add('NotScroll');
      window.addEventListener('keydown', handleToggleModalByEsc);
    }

    return () => {
      document.querySelector('body').classList.remove('NotScroll');
      window.removeEventListener('keydown', handleToggleModalByEsc);
    };
  }, [children, handleToggleModal, idx]);

  return (
    <>
      <div key={idx} className={modalSettins?.backdropClass} onClick={handleCloseModalBackdrop}>
        <div className={modalSettins?.modalClass} style={modalSettins?.modalStyle}>
          {modalSettins.defaultBtn && (
            <button className={s.closeModal} onClick={handleToggleModal}>
              <SvgIconClose size={'100%'} />
            </button>
          )}
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalComponent;
