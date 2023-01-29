import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Select from 'components/Select/Select';
import Input from 'components/Input/Input';
import { useModal } from 'components/ModalContent/Modal';

import s from './FormTransaction.module.scss';

const inputs = [
  { name: 'date', label: '', type: 'date', variant: 'standard' },
  { name: 'time', label: '', type: 'time', variant: 'standard' },
  { name: 'value', label: 'Сума', type: 'number', variant: 'standard' },
  { name: 'comment', label: 'Коментар', type: 'text', variant: 'standard' },
];
const selects = [
  { name: 'type' },
  { name: 'countIn' },
  { name: 'subCountIn' },
  { name: 'countOut' },
  { name: 'subCountOut' },
  { name: 'category' },
  { name: 'counterParty' },
  { name: 'provider' },
  { name: 'customer' },
  { name: 'subCategory' },
  { name: 'status' },
];
export const initialTransactionState = {
  date: '',
  time: '',
  type: '',
  countIn: '',
  subCountIn: '',
  countOut: '',
  subCountOut: '',
  category: '',
  subCategory: '',
  value: '',
  customer: '',
  provider: '',
  document: '',
  comment: '',
};

const FormTransaction = ({
  data,
  idx,
  disabled = false,
  onAddNewTransaction,
  onEditTransaction,
  onCopyTransaction,
}) => {
  const [transactionData, setTransactionData] = useState(data || initialTransactionState);
  const modal = useModal();

  function onChange(ev) {
    const { name, value } = ev.target;
    setTransactionData(prevState => {
      return { ...prevState, [name]: value };
    });
    console.log(transactionData);
  }
  function onSelect(ev, value, reason, details) {
    console.log({ ev, value, reason, details });

    setTransactionData(prev => {
      return { ...prev, [value?.name]: value?.value };
    });
  }
  function onSubmit(ev) {
    console.log('transactionData', transactionData);
    onAddNewTransaction && onAddNewTransaction({ ev, data: transactionData });
    onEditTransaction && onEditTransaction({ ev, data: transactionData });
    onCopyTransaction && onCopyTransaction({ ev, data: transactionData });
    modal.handleToggleModal();
  }

  useEffect(() => {
    if (!data) {
      return;
    }
    setTransactionData(data);
  }, [data]);

  return (
    <>
      <form className={s.subForm} onSubmit={onSubmit} onReset={modal.handleToggleModal}>
        <div className={s.header}>
          {onAddNewTransaction && <span>{`Нова транзакція`}</span>}
          {onEditTransaction && <span>{`Змінити транзакцію`}</span>}
          {onCopyTransaction && <span>{`Копія транзакції`}</span>}
        </div>
        <div className={s.scroll}>
          <div className={s.inputs}>
            <Input {...{ ...inputs[0], onChange, disabled, data: transactionData }} />
            <Input {...{ ...inputs[1], onChange, disabled, data: transactionData }} />

            {selects.map((item, idx) => (
              <Select key={item?.name || idx} {...{ onSelect, disabled, name: item?.name, data: transactionData }} />
            ))}

            <Input {...{ ...inputs[2], onChange, disabled, data: transactionData }} />
            <Input {...{ ...inputs[3], onChange, disabled, data: transactionData }} />
          </div>
        </div>
        <div className={s.btns}>
          <Button variant="contained" type="submit">
            Прийняти
          </Button>
          <Button variant="outlined" type="reset">
            Скасувати
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormTransaction;