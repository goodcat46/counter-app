import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Select from 'components/Select/Select';
import Input from 'components/Input/Input';
import { useModal } from 'components/ModalContent/Modal';
import { useSelector } from 'react-redux';
import { categoriesSelector, countsSelector } from 'redux/selectors.store.';
import SelectDbl from 'components/Select/SelectDbl';

import s from './FormTransaction.module.scss';

const inputs = {
  date: {
    name: 'transactionDate',
    label: '',
    type: 'datetime-local',
    value: new Date().toLocaleDateString(),
    variant: 'standard',
  },
  time: { name: 'time', label: '', type: 'time', variant: 'standard' },
  value: { name: 'value', label: 'Сума', type: 'number', variant: 'standard' },
  comment: { name: 'comment', label: 'Коментар', type: 'text', variant: 'standard' },
};
// const selects = [
//   { name: 'type' },
//   { name: 'countIn' },
//   { name: 'subCountIn' },
//   { name: 'countOut' },
//   { name: 'subCountOut' },
//   { name: 'category' },
//   { name: 'counterParty' },
//   { name: 'provider' },
//   { name: 'customer' },
//   { name: 'subCategory' },
//   { name: 'status' },
// ];
export const initialTransactionState = {
  transactionDate: '',
  type: '',
  countIn: '',
  subCountIn: '',
  countOut: '',
  subCountOut: '',
  category: '',
  subCategory: '',
  value: '',
  contractor: '',
  document: '',
  project: '',
  mark: '',
  tags: [],
  comment: '',
};

const FormTransaction = ({ data, disabled = false, onAddNewTransaction, onEditTransaction, onCopyTransaction }) => {
  const [transactionData, setTransactionData] = useState(data || initialTransactionState);
  const { categories = [] } = useSelector(categoriesSelector);
  const { counts = [] } = useSelector(countsSelector);
  console.log(categories, 'categories =====================>>>>>>>>>>>');
  console.log(counts, 'counts =====================>>>>>>>>>>>');
  const modal = useModal();

  // function onFormStateChange({ ev, data }) {
  //   if (ev) {
  //     const { name, value } = ev.target;
  //     setTransactionData(prevState => {
  //       return { ...prevState, [name]: value };
  //     });
  //     return;
  //   }
  //   if (data) {
  //     setTransactionData(prevState => {
  //       return { ...prevState, ...data };
  //     });
  //   }
  // }
  function onChange(ev) {
    const { name, value } = ev.target;
    setTransactionData(prevState => {
      return { ...prevState, [name]: value };
    });
    // console.log('onChange', transactionData);
  }
  function onSelect(_ev, value, _reason, _details) {
    // console.log({ _ev, value, _reason, _details });

    setTransactionData(prev => {
      return { ...prev, [value?.name]: value?.value };
    });
  }
  function onSubmit(ev) {
    ev.preventDefault();
    console.log('transactionData ===========>>>>>>>>>>', transactionData);

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
          {onEditTransaction && <span>{`Змінити транзакцію ${transactionData?._id}`}</span>}
          {onCopyTransaction && <span>{`Копія транзакції ${transactionData?._id}`}</span>}
        </div>
        <div className={s.scroll}>
          <div className={s.inputs}>
            <Input {...{ ...inputs.date, onChange, disabled, data: transactionData }} />

            <Select {...{ onSelect, disabled, name: 'type', data: transactionData }} />

            <SelectDbl
              options={counts}
              onSelect={onSelect}
              parentName="countIn"
              childName="subCountIn"
              formData={transactionData}
            />

            <SelectDbl
              options={counts}
              onSelect={onSelect}
              parentName="countOut"
              childName="subCountOut"
              formData={transactionData}
            />

            <SelectDbl
              options={categories.filter(option => option?.type === transactionData?.type)}
              onSelect={onSelect}
              parentName="category"
              childName="subCategory"
              formData={transactionData}
            />
            <Select {...{ onSelect, disabled, name: 'project', data: transactionData }} />
            <Select {...{ onSelect, disabled, name: 'document', data: transactionData }} />
            <Select {...{ onSelect, disabled, name: 'mark', data: transactionData }} />

            <Input {...{ ...inputs.value, onChange, disabled, data: transactionData }} />
            <Input {...{ ...inputs.comment, onChange, disabled, data: transactionData }} />
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
