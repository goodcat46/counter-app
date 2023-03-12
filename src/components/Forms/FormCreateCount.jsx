import React, { useState } from 'react';
import styled from 'styled-components';
import ModalDefault from '../ModalDefault/ModalDefault';
import InputTextPrimary from './Inputs/InputTextPrimary';
import TextareaPrimary from './Inputs/TextareaPrimary';

const FormCreateCount = ({ craete = true, edit }) => {
  const [formData, setFormData] = useState();

  function onFormDataChange(ev) {
    const { name, value } = ev.target;
    setFormData(prev => {
      return { ...prev, [name]: value };
    });
  }
  const modalSettings = {
    title: `Створити рахунок`,
    style: { minWidth: '270px' },
    onSubmit,
  };

  function onSubmit() {
    const payload = {
      submitData: formData,
      onSuccess: () => {},
      onError: () => {},
    };
    console.log(payload);
  }

  return (
    <ModalDefault {...modalSettings}>
      <FormBox>
        <InputTextPrimary label="Назва" name="name" placeholder="Введіть назву" onChange={onFormDataChange} />

        {craete && (
          <InputTextPrimary
            label="Баланс"
            name="amount"
            placeholder="Введіть початковий баланс"
            onChange={onFormDataChange}
          />
        )}

        <TextareaPrimary label="Опис" name="descr" onChange={onFormDataChange} placeholder="Введіть опис" />
      </FormBox>
    </ModalDefault>
  );
};

const FormBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  padding: 12px;

  min-width: 275px;
`;

export default FormCreateCount;
