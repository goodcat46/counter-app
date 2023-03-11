import React from 'react';
import { useModal } from 'components/ModalContent/Modal';
import ModalFooter from './ModalFooter';
import theme from 'theme/theme';

import styled from 'styled-components';
import ModalHeader from './ModalHeader';
import ModalFilter from './ModalFilter';

const ModalDefault = ({
  title = 'default modal title',
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
  const { handleToggleModal } = useModal();

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!onSubmit) return console.log('No passed "onSubmit" handler');
    handleToggleModal();
    if (typeof beforeSubmit === 'function') beforeSubmit();
    if (typeof onSubmit === 'function') onSubmit();
    if (typeof afterSubmit === 'function') afterSubmit();
  }
  function handleClose(ev) {
    if (!onClose) return console.log('No passed "onClose" handler');
    if (typeof beforeClose === 'function') beforeClose();
    if (typeof onClose === 'function') {
      handleToggleModal();
      onClose();
    }
    if (typeof afterClose === 'function') afterClose();
  }
  function handleSelect(option) {
    if (!onSelect) console.log('No passed "onSelect" handler', option);
    if (typeof onSelect === 'function') onSelect(option);
  }
  return (
    <ModalDefaultContainer onSubmit={handleSubmit}>
      <ModalHeader onClose={handleClose} />

      <ModalMain>
        <ModalFilter onSelect={handleSelect} options={filterOptions} />

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

  height: 550px;
  min-height: 350px;
  max-height: 100%;
  width: 350px;
  min-width: 250px;
  max-width: 100%;

  border-radius: 2px;
  overflow: hidden;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${theme.dark.backgroundColorMain};

  resize: both;
`;

const ModalMain = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;

  overflow: hidden;
  position: relative;

  height: 100%;

  background-color: ${theme.dark.backgroundColorMain};

  border-right: 1px solid ${theme.dark.borderColor};
  border-left: 1px solid ${theme.dark.borderColor};
`;
const MainScroll = styled.div`
  overflow: auto;

  width: 100%;
  height: 100%;

  background-color: ${theme.dark.backgroundColorMain};
`;

export default ModalDefault;
