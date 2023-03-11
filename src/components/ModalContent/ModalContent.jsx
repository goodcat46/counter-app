import React, { useEffect, useState } from 'react';
import Modal from './Modal';

const ModalContent = ({
  children,
  trigger,
  className,
  closeBtn = true,
  style,
  isOpen = false,
  beforeClose,
  afeterClose,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  function handleToggleModal(ev) {
    if (typeof beforeClose === 'function') beforeClose();

    setIsModalOpen(!isModalOpen);

    if (typeof afeterClose === 'function') afeterClose();
  }

  useEffect(() => {
    if (isOpen) console.log('MODAL FORCE OPEN');
  }, [isOpen]);

  let Trigger = trigger;
  return (
    <>
      {trigger && <Trigger onClick={handleToggleModal} />}
      {isModalOpen && <Modal {...{ isModalOpen, className, closeBtn, style, handleToggleModal }}>{children}</Modal>}
    </>
  );
};

export default ModalContent;
