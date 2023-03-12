import React, { useState, useEffect, createContext, useContext } from 'react';
import SvgIconClose from './SvgIconClose';
import styled from 'styled-components';

//* ""handleToggle"" функція яка тоглить стейт модалки
//* ""defaultBtn"" BOOLEAN чи потрібна дефолтна кнопка закриття
//* ""children"" вміст модалки

const initialSettings = {
  style: null,
  backdropColor: 'rgba(0, 0, 0, 0.5)',
  backdropAnimation: `ModalAnimation 100ms linear`,
  backdropNonAnimation: `ModalAnimation 0ms linear`,
  backdropStyle: null,
  modalStyle: null,
  closeBtnStyle: null,
  closeBtn: false,
};
export const ModalContext = createContext();
export const useModalCTX = () => useContext(ModalContext);

const ModalComponent = ({ children, idx, settings, onClose, id, totalLength, isLast }) => {
  const [modalSettings] = useState(settings || initialSettings);

  function onBackdropClick(ev) {
    if (ev.target !== ev.currentTarget) return;
    if (typeof onClose === 'function') onClose();
  }

  const CTX = { onCloseModal: onClose, modalIdx: idx, modalSettings: modalSettings, id, totalLength, isLast };

  useEffect(() => {
    // console.log(idx);
  }, [children, idx]);

  return (
    <ModalContext.Provider value={CTX}>
      <Backdrop key={idx} isLast={isLast} onClick={onBackdropClick}>
        <Modal style={modalSettings?.modalStyle}>
          {modalSettings?.closeBtn && (
            <CloseButton type="button" onClick={onClose}>
              <SvgIconClose size={'100%'} />
            </CloseButton>
          )}
          {children}
        </Modal>
      </Backdrop>
    </ModalContext.Provider>
  );
};
const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1300;

  width: 100%;
  height: 100%;

  background-color: ${({ isLast }) => (isLast ? initialSettings.backdropColor : '')};
  animation: ${({ isLast }) => (!isLast ? initialSettings.backdropNonAnimation : '')};
`;
const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  left: 50%;

  min-width: 200px;

  min-height: 200px;
  max-width: 98%;
  max-height: 98%;

  // color: inherit;
  // fill: inherit;

  transform: translate(-50%, -50%);
  border-radius: 2px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);

  animation: ModalAnimation 100ms linear;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 150;

  font-size: 16px;
  color: rgba(0, 0, 0, 0.1);
  fill: rgba(0, 0, 0, 0.5);

  width: 30px;
  height: 30px;
  padding: 0;

  border-style: none;
  border: 1px solid transparent;

  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
export default ModalComponent;
