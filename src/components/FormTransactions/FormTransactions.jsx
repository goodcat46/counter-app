import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { useModal } from 'components/ModalContent/Modal';
import FormTransaction from '../FormTransaction/FormTransaction';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import ModalContent from 'components/ModalContent/ModalContent';
import TableList from 'components/TableList/TableList';
import { nanoid } from '@reduxjs/toolkit';
import { transactionsSelector } from 'redux/selectors';

import s from './FormTransactions.module.scss';

const FormTransactions = () => {
  const { tableTitles } = useSelector(transactionsSelector);
  const { handleToggleModal } = useModal();
  const [formData, setFormData] = useState([]);
  const [selectedTr, setSelectedTr] = useState(null);

  function onDeleteTransaction(id) {
    if (!selectedTr) return;
    setFormData(prevState => prevState.filter(el => el._id !== selectedTr));
    setSelectedTr(null);
  }
  function onEditTransaction({ ev, data }) {
    // if (isSubFormActive) {
    // }
    // if (!isSubFormActive) {
    // }
    // setSubFormActive(!isSubFormActive);
    // setFormData(prevState => {
    //   const index = prevState.indexOf(el => el._id === newObj._id);
    //   return prevState.splice(index, 1, newObj);
    // });
    setSelectedTr(null);
  }
  function onCopyTransaction({ ev, data }) {
    if (!selectedTr) {
      return;
    }
    setFormData(prevState => {
      const index = prevState.indexOf(el => el._id === selectedTr);
      const itemCopy = prevState[index];
      console.log({ prevState, index, itemCopy });

      // return prevState.splice(index, 0, { ...itemCopy, id: nanoid(8) });
    });
    setSelectedTr(null);
  }
  function onAddNewTransaction({ ev, data }) {
    const newTr = { _id: nanoid(8), ...data };
    setFormData(prevState => [...prevState, newTr]);
  }
  function onTransactionClick({ ev, data }) {
    console.log('onTransactionClick', data);
    setSelectedTr(data?._id);
  }
  function onSubmit(ev) {
    ev.preventDefault();
    // console.table(formData);
  }
  function onReset(ev) {}

  return (
    <form className={s.form} onSubmit={onSubmit} onReset={onReset}>
      <div className={s.header}>Створити транзакції</div>

      <div className={s.scroll}>
        <TableList {...{ tableTitles, tableData: formData, onRowClick: onTransactionClick }} />
      </div>

      <div className={s.footer}>
        <fieldset className={s.actions}>
          <ModalContent
            trigger={props => (
              <Button variant="outlined" {...props}>
                <SvgIcon iconId="plus" style={{ fill: '#000' }} />
              </Button>
            )}
          >
            <FormTransaction {...{ onAddNewTransaction }} />
          </ModalContent>

          <ModalContent
            trigger={props => (
              <Button variant="outlined" {...props} disabled={!selectedTr || formData.length === 0}>
                <SvgIcon iconId="edit" style={{ fill: '#000' }} />
              </Button>
            )}
          >
            <FormTransaction {...{ onEditTransaction, data: formData.find(el => el._id === selectedTr) || {} }} />
          </ModalContent>

          <ModalContent
            trigger={props => (
              <Button variant="outlined" {...props} disabled={!selectedTr || formData.length === 0}>
                <SvgIcon iconId="copy" style={{ fill: '#000' }} />
              </Button>
            )}
          >
            <FormTransaction
              {...{
                onCopyTransaction,
                data: formData.find(el => el._id === selectedTr),
              }}
            />
          </ModalContent>

          <Button variant="outlined" disabled={!selectedTr || formData.length === 0} onClick={onDeleteTransaction}>
            <SvgIcon iconId="delete" style={{ fill: '#000' }} />
          </Button>
        </fieldset>

        <div className={s.formBtns}>
          <Button variant="contained" type="submit">
            Підтвердити
          </Button>

          <Button onClick={handleToggleModal}>Закрити</Button>
        </div>
      </div>
    </form>
  );
};

export default FormTransactions;
