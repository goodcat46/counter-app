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
  const [formData, setFormData] = useState(data || initialTransactionState);
  const { categories = [] } = useSelector(categoriesSelector);
  const { counts = [] } = useSelector(countsSelector);
  console.log(categories, 'categories =====================>>>>>>>>>>>');
  console.log(counts, 'counts =====================>>>>>>>>>>>');
  const modal = useModal();

  // function onFormStateChange({ ev, data }) {
  //   if (ev) {
  //     const { name, value } = ev.target;
  //     setFormData(prevState => {
  //       return { ...prevState, [name]: value };
  //     });
  //     return;
  //   }
  //   if (data) {
  //     setFormData(prevState => {
  //       return { ...prevState, ...data };
  //     });
  //   }
  // }
  function onChange(ev) {
    const { name, value } = ev.target;
    setFormData(prev => {
      return { ...prev, [name]: value };
    });
    // console.log('onChange', formData);
  }
  function onSelect(_ev, value, _reason, _details) {
    // console.log({ _ev, value, _reason, _details });

    setFormData(prev => {
      return { ...prev, [value?.name]: value?.value };
    });
  }
  function onSubmit(ev) {
    ev.preventDefault();
    console.log('formData ===========>>>>>>>>>>', formData);

    onAddNewTransaction && onAddNewTransaction({ ev, data: formData });
    onEditTransaction && onEditTransaction({ ev, data: formData });
    onCopyTransaction && onCopyTransaction({ ev, data: formData });

    modal.handleToggleModal();
  }
  useEffect(() => {
    if (!data) {
      return;
    }
    setFormData(data);
  }, [data]);

  return (
    <>
      <form className={s.subForm} onSubmit={onSubmit} onReset={modal.handleToggleModal}>
        <div className={s.header}>
          {onAddNewTransaction && <span>{`Нова транзакція`}</span>}
          {onEditTransaction && <span>{`Змінити транзакцію ${formData?._id}`}</span>}
          {onCopyTransaction && <span>{`Копія транзакції ${formData?._id}`}</span>}
        </div>
        <div className={s.scroll}>
          <div className={s.inputs}>
            <Input {...{ ...inputs.date, onChange, disabled, data: formData }} />

            <Select {...{ onSelect, disabled, name: 'type', data: formData }} />

            <SelectDbl
              options={counts}
              onSelect={onSelect}
              parentName="countIn"
              childName="subCountIn"
              formData={formData}
              disabled={formData.type === 'EXPENSE'}
            />

            <SelectDbl
              options={counts}
              onSelect={onSelect}
              parentName="countOut"
              childName="subCountOut"
              formData={formData}
              disabled={formData.type === 'INCOME'}
            />

            <SelectDbl
              options={categories.filter(option => option?.type === formData?.type)}
              onSelect={onSelect}
              parentName="category"
              childName="subCategory"
              formData={formData}
              disabled={!formData.type}
            />

            <Select {...{ onSelect, disabled, name: 'project', data: formData }} />
            <Select {...{ onSelect, disabled, name: 'document', data: formData }} />
            <Select {...{ onSelect, disabled, name: 'mark', data: formData }} />

            <Input {...{ ...inputs.value, onChange, disabled, data: formData }} />
            <Input {...{ ...inputs.comment, onChange, disabled, data: formData }} />
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
