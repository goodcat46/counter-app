import React from 'react';
import styled from 'styled-components';
import theme from 'theme/theme';

const InputTextPrimary = ({ label, disabled, ...props }) => {
  return (
    <InputPrimary disabled={disabled}>
      <Label>{label}</Label>
      <InputText type="text" {...props} disabled={disabled} />
    </InputPrimary>
  );
};

const InputPrimary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  opacity: ${({ disabled }) => (disabled ? 0.5 : '')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};

  position: relative;
`;
const Label = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;
  /* text-transform: uppercase; */
`;
const InputText = styled.input`
  padding: 5px 0px 5px 8px;

  width: 100%;
  height: 26px;

  color: inherit;

  background-color: transparent;
  border-radius: 2px;
  border: 1px solid ${theme.inputBorder};
  &::placeholder {
  }
`;

export default InputTextPrimary;
