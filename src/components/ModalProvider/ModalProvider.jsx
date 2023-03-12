import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ModalPortal from './ModalPortal';
// import SvgIconClose from './SvgIconClose/SvgIconClose';
import ModalComponent from './ModalComponent';
import { nanoid } from '@reduxjs/toolkit';

export const ModalProviderContext = createContext();
export const useModalProvider = () => useContext(ModalProviderContext);

const ModalProvider = ({ children, portal = 'modal' }) => {
  const [modalContent, setModalContent] = useState([]);

  function handleOpenModal({ ModalChildren, modalChildrenProps, settings } = {}) {
    if (!ModalChildren) return console.error('ModalChildren is undefined');

    if (typeof ModalChildren === 'function') {
      const modalItem = { ModalChildren, modalChildrenProps, settings, id: nanoid(8) };
      setModalContent(prev => [...prev, modalItem]);
      return;
    }
  }
  function handleCloseModal(id) {
    setModalContent(prev => prev.filter(el => el.id !== id));
  }

  const CTX = { handleCloseModal, handleOpenModal, isOpen: modalContent.length > 0 };

  useEffect(() => {
    function handleToggleModalByEsc(evt) {
      if (evt?.code === 'Escape') {
        if (modalContent.length === 0) document.querySelector('body').classList.remove('NotScroll');

        setModalContent(prev => {
          const arr = [...prev];
          arr.splice(-1);
          return arr;
        });
      }
    }
    if (modalContent.length > 0) {
      document.querySelector('body').classList.add('NotScroll');
      window.addEventListener('keydown', handleToggleModalByEsc);
    }

    return () => {
      document.querySelector('body').classList.remove('NotScroll');
      window.removeEventListener('keydown', handleToggleModalByEsc);
    };
  }, [children, modalContent]);

  return (
    <>
      <ModalProviderContext.Provider value={CTX}>
        <>{children}</>

        <ModalPortal portal={portal}>
          {modalContent?.length > 0 &&
            modalContent.map((Item, idx) => {
              console.log(Item?.modalChildrenProps);

              return (
                <ModalComponent
                  key={Item.id}
                  {...{
                    ...Item,
                    idx,
                    id: Item.id,
                    totalLength: modalContent.length,
                    isLast: idx === modalContent.length - 1,
                    onClose: () => {
                      handleCloseModal(Item.id);
                    },
                  }}
                >
                  {Item?.ModalChildren && <Item.ModalChildren {...Item?.modalChildrenProps} />}
                </ModalComponent>
              );
            })}
        </ModalPortal>
      </ModalProviderContext.Provider>
    </>
  );
};

ModalProvider.propTypes = {
  portal: PropTypes.string,
  // ! children: PropTypes.typeOf([]),
};

export default ModalProvider;
