import React, { useRef, useState } from 'react';
import { Button } from '@mui/material';
import Transaction from './TransactionRow/Transaction';
// import { initialTransactionState } from './TransactionRow/Transaction';
import { nanoid } from '@reduxjs/toolkit';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { useModal } from 'components/ModalContent/Modal';

import s from './FormTransaction.module.scss';
import ModalContent from 'components/ModalContent/ModalContent';
import TableList from 'components/TableList/TableList';

import { transactionsTableTitles as tableTitles } from 'data';

// export default FormInputsRow

const FormTransaction = ({ onCloseModal }) => {
  const { handleToggleModal } = useModal();
  const [formData, setFormData] = useState([]);
  const [selectedTr, setSelectedTr] = useState(null);
  const currentTrRef = useRef(null);

  // function onCreateTransaction(obj) {
  //   setFormData(prevState => [...prevState, { ...obj, id: nanoid(8) }]);
  // }
  function onDeleteTransaction(id) {
    if (!selectedTr) return;
    setFormData(prevState => prevState.filter(el => el._id !== selectedTr));
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
  }
  function onCopyTransaction({ ev, data }) {
    if (!selectedTr) {
      return;
    }
    setFormData(prevState => {
      console.log('setFormData', prevState);
      const index = prevState.indexOf(el => el._id === selectedTr);
      const itemCopy = prevState[index];

      return prevState.splice(index, 0, { ...itemCopy, id: nanoid(8) });
    });
  }
  function onAddNewTransaction({ ev, data }) {
    const newTr = { _id: nanoid(8), ...data };
    setFormData(prevState => [...prevState, newTr]);
  }
  function onTransactionClick({ ev, data }) {
    console.log(data);
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
            <Transaction {...{ onAddNewTransaction }} />
          </ModalContent>

          <ModalContent
            trigger={props => (
              <Button variant="outlined" {...props} disabled={!currentTrRef.current}>
                <SvgIcon iconId="edit" style={{ fill: '#000' }} />
              </Button>
            )}
          >
            <Transaction {...{ onEditTransaction }} />
          </ModalContent>

          <ModalContent
            trigger={props => (
              <Button variant="outlined" {...props} disabled={!currentTrRef.current}>
                <SvgIcon iconId="copy" style={{ fill: '#000' }} />
              </Button>
            )}
          >
            <Transaction {...{ onCopyTransaction }} />
          </ModalContent>

          <Button variant="outlined" disabled={!currentTrRef.current} onClick={onDeleteTransaction}>
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

export default FormTransaction;
