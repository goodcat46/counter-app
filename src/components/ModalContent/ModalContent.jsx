import React, { useEffect, useState } from 'react';
import Modal from './Modal';

const ModalContent = ({
  children,
  trigger,
  className,
  closeBtn = false,
  style,
  isOpen = false,
  beforeOpen,
  afterOpen,
  beforeClose,
  afterClose,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  // function handleToggleModal(ev) {
  //   setIsModalOpen(prev => {
  //     if (typeof beforeOpen === 'function' && !prev) beforeOpen(prev);
  //     if (typeof beforeClose === 'function' && prev) beforeClose(prev);

  //     return !prev;
  //   });

  //   if (typeof afterOpen === 'function' && !isModalOpen) afterOpen(!isModalOpen);
  //   if (typeof afterClose === 'function' && isModalOpen) afterClose(!isModalOpen);
  // }
  function onOpenModal(ev) {
    setIsModalOpen(prev => {
      if (typeof beforeOpen === 'function' && !prev) beforeOpen(prev);

      return true;
    });

    if (typeof afterOpen === 'function' && !isModalOpen) afterOpen(!isModalOpen);
  }
  function onCloseModal(ev) {
    setIsModalOpen(prev => {
      if (typeof afterClose === 'function' && prev) afterClose(!prev);

      return false;
    });
    if (typeof beforeClose === 'function' && isModalOpen) beforeClose(isModalOpen);
  }

  useEffect(() => {
    if (isOpen) console.log('MODAL FORCE OPEN');
  }, [isOpen]);

  let Trigger = trigger;
  return (
    <>
      {trigger && <Trigger onClick={onOpenModal} />}

      {isModalOpen && (
        <Modal {...{ isModalOpen, className, closeBtn, style, onCloseModal, onOpenModal }}>{children}</Modal>
      )}
    </>
  );
};

export default ModalContent;
