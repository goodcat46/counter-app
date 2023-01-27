import React, { useState } from 'react';
import Modal from './Modal';

const ModalContent = ({ children, trigger, className, closeBtn = true, style }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleToggleModal(ev) {
    setIsModalOpen(!isModalOpen);
  }

  let Trigger = trigger;
  return (
    <>
      {trigger && <Trigger onClick={handleToggleModal} />}
      {isModalOpen && <Modal {...{ isModalOpen, className, closeBtn, style, handleToggleModal }}>{children}</Modal>}
    </>
  );
};

export default ModalContent;
