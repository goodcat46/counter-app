import ButtonIcon, { ButtonIconVariants } from 'components/ButtonIcon/ButtonIcon';
import React from 'react';
import styled from 'styled-components';
import theme from 'theme/theme';

const ModalFooter = ({ onSubmit, onClose }) => {
  return (
    <Footer>
      {onSubmit && (
        <>
          <ButtonIcon
            onClick={() => {
              if (onClose) onClose();
            }}
            variant={ButtonIconVariants.outlinedLarge}
          >
            Закрити
          </ButtonIcon>

          <ButtonIcon type="submit" variant={ButtonIconVariants.filledLarge}>
            Прийняти
          </ButtonIcon>
        </>
      )}
      {!onSubmit && (
        <ButtonIcon
          onClick={() => {
            if (onClose) onClose();
          }}
          variant={ButtonIconVariants.filledLarge}
        >
          Закрити
        </ButtonIcon>
      )}
    </Footer>
  );
};

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 8px;

  position: sticky;
  bottom: 0;
  left: 0;

  padding: 12px;

  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;

  background-color: inherit;
  border: 1px solid ${theme.dark.borderColor};
`;
export default ModalFooter;
