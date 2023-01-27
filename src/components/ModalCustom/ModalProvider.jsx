import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import ModalPortal from './ModalPortal/ModalPortal';
// import SvgIconClose from './SvgIconClose/SvgIconClose';
import ModalComponent from './ModalComponent';
import { nanoid } from '@reduxjs/toolkit';

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
  closeBtnClass: '',
  closeBtnStyle: null,
  closeBtn: true,
};

const ModalProvider = ({ children, portal = 'modal' }) => {
  const [modalContent, setModalContent] = useState([]);

  function handleOpenModal({ ev, content, settings = modalInitialSettings }) {
    const contendId = nanoid(8);
    // if (!content) {
    //   setModalSettings(modalInitialSettings);
    //   setModalContent(prev => [...prev, { RenderItem: content, id: '' }]);
    //   return;
    // }
    setModalContent(prev => [...prev, { RenderContent: content, id: contendId }]);
    return contendId;
  }
  function handleCloseModal(id) {
    setModalContent(prev => prev.filter(el => el.id !== id));
  }
  function handleCloseModalByBackdrop({ evt, id }) {
    let { target, currentTarget } = evt;

    if (target === currentTarget) {
      setModalContent(prev => prev.filter(el => el.id !== id));
    }
  }

  // useEffect(() => {
  //   window.addEventListener('keydown', handleToggleModalByEsc);

  //   function handleToggleModalByEsc(evt) {
  //     let { code } = evt;

  //     if (code === 'Escape') {
  //       setModalSettings(modalInitialSettings);
  //       setModalContent([]);
  //       console.log('Escape');
  //       document.querySelector('body').classList.remove('NotScroll');
  //       window.removeEventListener('keydown', handleToggleModalByEsc);
  //     }
  //   }

  //   if (modalContent) {
  //     document.querySelector('body').classList.add('NotScroll');
  //   }

  //   return () => {
  //     document.querySelector('body').classList.remove('NotScroll');
  //     window.removeEventListener('keydown', handleToggleModalByEsc);
  //   };
  // }, [modalContent]);

  return (
    <>
      <ModalContext.Provider value={{ handleCloseModal, handleOpenModal, handleCloseModalByBackdrop }}>
        <>{children}</>
        <ModalPortal portal={portal}>
          {modalContent.length > 0 &&
            modalContent.map((Item, idx) => (
              <ModalComponent key={Item.id} {...{ handleCloseModal, handleOpenModal, handleCloseModalByBackdrop }}>
                <Item />
              </ModalComponent>
            ))}
        </ModalPortal>
      </ModalContext.Provider>
    </>
  );
};

ModalProvider.propTypes = {
  isOpenModal: PropTypes.bool,
  handleToggle: PropTypes.func,
  defaultBtn: PropTypes.bool,
  // ! children: PropTypes.typeOf([]),
};

export default ModalProvider;
