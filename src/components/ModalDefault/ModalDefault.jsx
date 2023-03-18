import React from 'react';
import ModalHeader from './ModalHeader';
import ModalFilter from './ModalFilter';
import ModalFooter from './ModalFooter';
import { useModalCTX } from 'components/ModalProvider/ModalComponent';
// import { useModal } from 'components/ModalContent/Modal';
import theme from 'theme/theme';

import styled from 'styled-components';

const ModalDefault = ({
  title = 'default modal title',
  style,
  children,
  beforeSubmit,
  filterOptions,
  onSubmit,
  afterSubmit,
  beforeClose,
  onClose,
  afterClose,
  onSelect,
}) => {
  const modal = useModalCTX();

  function handleSubmit(ev) {
    // ev.preventDefault();
    if (!onSubmit) return console.log('No passed "onSubmit" handler');
    modal.onCloseModal();
    if (typeof beforeSubmit === 'function') beforeSubmit();
    if (typeof onSubmit === 'function') onSubmit();
    if (typeof afterSubmit === 'function') afterSubmit();
  }
  function handleClose(_ev) {
    modal.onCloseModal();
    if (!onClose) return console.log('No passed "onClose" handler');
    if (typeof beforeClose === 'function') beforeClose();
    if (typeof onClose === 'function') {
      onClose();
    }
    if (typeof afterClose === 'function') afterClose();
  }
  function handleSelect(option) {
    if (!onSelect) console.log('No passed "onSelect" handler', option);
    if (typeof onSelect === 'function') onSelect(option);
  }

  return (
    <ModalDefaultContainer onSubmit={handleSubmit} style={style}>
      <ModalHeader onClose={handleClose} title={title} />

      <ModalMain filter={filterOptions}>
        {filterOptions && <ModalFilter onSelect={handleSelect} options={filterOptions} />}

        <MainScroll>{children}</MainScroll>
      </ModalMain>

      <ModalFooter onClose={handleClose} onSubmit={onSubmit} />
    </ModalDefaultContainer>
  );
};

const ModalDefaultContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr min-content;

  position: relative;

  min-height: 350px;
  max-height: 100%;
  min-width: 250px;
  max-width: 100%;

  border-radius: 2px;
  overflow: hidden;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${theme.dark.backgroundColorMain};

  resize: both;

  @media screen and (max-width: 480px) {
    width: 98vw;
  }

  @media screen and (min-width: 480px) {
    min-height: 350px;
    min-width: 450px;
  }
`;

const ModalMain = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${({ filter }) => (filter ? 'min-content 1fr' : '1fr')};

  overflow: hidden;
  position: relative;

  height: 100%;
  min-width: min-content;

  background-color: ${theme.dark.backgroundColorMain};

  border-right: 1px solid ${theme.dark.borderColor};
  border-left: 1px solid ${theme.dark.borderColor};
`;

const MainScroll = styled.div`
  overflow: auto;

  width: 100%;
  min-width: min-content;
  height: 100%;

  background-color: ${theme.dark.backgroundColorMain};
`;

export default ModalDefault;
