import React, { createContext, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalPortal from './ModalPortal';
import SvgIconClose from './SvgIconClose/SvgIconClose';

import s from './Modal.module.scss';

//* ""handleToggle"" функція яка тоглить стейт модалки
//* ""defaultBtn"" BOOLEAN чи потрібна дефолтна кнопка закриття
//* ""children"" вміст модалки
export const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

const ModalCustom = ({ closeBtn, children, modalStyle, onCloseModal, onOpenModal, isModalOpen }) => {
  function handleCloseModalByBackdrop(evt) {
    if (evt.target === evt.currentTarget) onCloseModal();
  }

  useEffect(() => {
    function handleCloseModalByEsc(evt) {
      if (evt.code === 'Escape') {
        onCloseModal();
        console.log('Escape modal close');
        window.removeEventListener('keydown', handleCloseModalByEsc);
      }
    }
    if (children) {
      document.querySelector('body').classList.add('NotScroll');
      window.addEventListener('keydown', handleCloseModalByEsc);
    }
    return () => {
      document.querySelector('body').classList.remove('NotScroll');
      window.removeEventListener('keydown', handleCloseModalByEsc);
    };
  }, [children, onCloseModal]);

  return (
    <ModalPortal>
      <ModalContext.Provider value={{ onCloseModal, onOpenModal, isModalOpen }}>
        <div className={s.Backdrop} onClick={handleCloseModalByBackdrop}>
          <div className={s.Modal} style={modalStyle}>
            {closeBtn && (
              <button className={s.closeModal} onClick={onCloseModal}>
                <SvgIconClose size={'100%'} />
              </button>
            )}
            {children}
          </div>
        </div>
      </ModalContext.Provider>
    </ModalPortal>
  );
};

ModalCustom.propTypes = {
  isOpenModal: PropTypes.bool,
  handleToggle: PropTypes.func,
  defaultBtn: PropTypes.bool,
  // ! children: PropTypes.typeOf([]),
};

export default ModalCustom;
