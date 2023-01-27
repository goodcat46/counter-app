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

const ModalCustom = ({ handleToggleModal, defaultBtn = true, children, modalStyle }) => {
  function handleToggleModalBackdrop(evt) {
    let { target, currentTarget } = evt;
    if (target === currentTarget) {
      handleToggleModal();
    }
  }

  useEffect(() => {
    function handleToggleModalByEsc(evt) {
      let { code } = evt;
      if (code === 'Escape') {
        handleToggleModal();
        console.log('Escape modal');
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
  }, [children, handleToggleModal]);

  return (
    <ModalPortal>
      <ModalContext.Provider value={{ handleToggleModal }}>
        <div className={s.Backdrop} onClick={handleToggleModalBackdrop}>
          <div className={s.Modal} style={modalStyle}>
            {defaultBtn && (
              <button className={s.closeModal} onClick={handleToggleModal}>
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
