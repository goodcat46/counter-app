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

const ModalCustom = ({ handleToggle, defaultBtn = true, children, modalStyle }) => {
  const [isOpen, setIsOpen] = useState(true);

  function handleToggleModal() {
    handleToggle();
    setIsOpen(!isOpen);
  }
  function handleToggleModalBackdrop(evt) {
    let { target, currentTarget } = evt;
    if (target === currentTarget) {
      handleToggle();
      setIsOpen(!isOpen);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleToggleModalByEsc);
    function handleToggleModalByEsc(evt) {
      let { code } = evt;
      if (code === 'Escape') {
        handleToggle();
        setIsOpen(!isOpen);
        console.log('Escape');
        window.removeEventListener('keydown', handleToggleModalByEsc);
      }
    }
    if (isOpen) {
      document.querySelector('body').classList.add('NotScroll');
    }
    return () => {
      document.querySelector('body').classList.remove('NotScroll');
      window.removeEventListener('keydown', handleToggleModalByEsc);
    };
  }, [handleToggle, isOpen]);

  return (
    <ModalPortal>
      <ModalContext.Provider value={{ isOpen, handleToggleModal, handleToggle }}>
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
