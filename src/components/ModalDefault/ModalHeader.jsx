import ButtonIcon, { ButtonIconVariants } from 'components/ButtonIcon/ButtonIcon';
import { iconId } from 'data';
import React from 'react';
import styled from 'styled-components';
import theme from 'theme/theme';

const ModalHeader = ({ title = 'default header titile', onClose }) => {
  return (
    <Header>
      <Title>{title}</Title>

      <ButtonIcon
        onClick={() => {
          if (onClose) onClose();
        }}
        size="28px"
        iconId={iconId.close}
        variant={ButtonIconVariants.transparent}
      />
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  left: 0;

  border-top-right-radius: 2px;
  border-top-left-radius: 2px;

  background-color: ${theme.dark.backgroundColorBlack};
`;
const Title = styled.p`
  color: #efefef;
  text-transform: uppercase;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 700;

  padding: 6px 8px;
  height: 100%;

  flex-basis: 100px;
  flex-grow: 1;
`;

export default ModalHeader;
