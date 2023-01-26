import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useModal } from 'components/ModalCustom/ModalComponent';
import Transaction from './TransactionRow/Transaction';

import s from './FormTransaction.module.scss';
import { nanoid } from '@reduxjs/toolkit';
import SvgIcon from 'components/SvgIcon/SvgIcon';

// export default FormInputsRow

const FormTransaction = ({ onCloseModal }) => {
  const { handleToggleModal } = useModal();
  const [formData, setFormData] = useState([]);
  // const [isAnyActive, setIsAnyActive] = useState(false);

  function onCreateTransaction(obj) {
    setFormData(prevState => [...prevState, { ...obj, id: nanoid(8) }]);
  }
  function onDeleteTransaction(id) {
    setFormData(prevState => prevState.filter(el => el.id !== id));
  }
  function onEditTransaction(newObj) {
    setFormData(prevState => {
      const index = prevState.indexOf(el => el.id === newObj.id);

      return prevState.splice(index, 1, newObj);
    });
  }
  function onCopyTransaction(id) {
    setFormData(prevState => {
      const index = prevState.indexOf(el => el.id === id);
      const itemCopy = prevState[index];

      return prevState.splice(index, 0, { ...itemCopy, id: nanoid(8) });
    });
  }
  function onAddNewTransaction() {
    setFormData(prevState => [...prevState, { id: nanoid(8) }]);
  }
  function onSubmit(ev) {
    ev.preventDefault();
  }
  function onReset(ev) {}

  return (
    <form className={s.form} onSubmit={onSubmit} onReset={onReset}>
      <div className={s.header}>Створити транзакції</div>

      <div className={s.scroll}>
        <Transaction {...{ onCreateTransaction, onDeleteTransaction, onEditTransaction, onCopyTransaction, idx: 1 }} />

        {formData.map(el => (
          <Transaction {...{ data: el, idx: 1 }} />
        ))}
      </div>

      <div className={s.footer}>
        <fieldset className={s.actions}>
          <Button variant="outlined" onClick={onAddNewTransaction}>
            <SvgIcon iconId="plus" style={{ fill: '#000' }} />
          </Button>
          <Button variant="outlined">
            <SvgIcon iconId="edit" style={{ fill: '#000' }} />
          </Button>
          <Button variant="outlined">
            <SvgIcon iconId="copy" style={{ fill: '#000' }} />
          </Button>
          <Button variant="outlined">
            <SvgIcon iconId="delete" style={{ fill: '#000' }} />
          </Button>
        </fieldset>

        {/* <Button variant="outlined" onClick={onAddNewTransaction}>
          Додати
        </Button> */}
        <div className={s.formBtns}>
          <Button
            variant="contained"
            onClick={() => {
              handleToggleModal();
            }}
          >
            Підтвердити
          </Button>
          <Button
            onClick={() => {
              handleToggleModal();
            }}
          >
            Закрити
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormTransaction;
