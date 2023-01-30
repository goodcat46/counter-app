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
    variant: 'standard',
  },
  time: { name: 'time', label: '', type: 'time', variant: 'standard' },
  amount: { name: 'amount', label: 'Сума', type: 'number', variant: 'standard' },
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
  type: null,
  countIn: null,
  subCountIn: null,
  countOut: null,
  subCountOut: null,
  category: null,
  subCategory: null,
  value: null,
  contractor: null,
  document: null,
  project: null,
  mark: null,
  tags: [],
  comment: null,
};

const FormTransaction = ({ data, disabled = false, onAddNewTransaction, onEditTransaction, onCopyTransaction }) => {
  const [formData, setFormData] = useState(data || {});
  const { categories = [] } = useSelector(categoriesSelector);
  const { counts = [] } = useSelector(countsSelector);
  // const { contractors = [] } = useSelector(contractorsSelector);
  // const { documents = [] } = useSelector(documentsSelector);

  // console.log(categories, 'categories =====================>>>>>>>>>>>');
  // console.log(counts, 'counts =====================>>>>>>>>>>>');

  // console.log(contractors, 'categories =====================>>>>>>>>>>>');
  // console.log(documents, 'counts =====================>>>>>>>>>>>');
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
              parentName="countIdIn"
              childName="subCountIdIn"
              formData={formData}
              disabled={formData.type === 'EXPENSE'}
            />

            <SelectDbl
              options={counts}
              onSelect={onSelect}
              parentName="countIdOut"
              childName="subCountIdOut"
              formData={formData}
              disabled={formData.type === 'INCOME'}
            />

            <SelectDbl
              options={categories.filter(option => option?.type === formData?.type)}
              onSelect={onSelect}
              parentName="categoryId"
              childName="subCategoryId"
              formData={formData}
              disabled={!formData.type}
            />
            <Input {...{ ...inputs.amount, onChange, disabled, data: formData }} />

            <Select {...{ onSelect, disabled, name: 'project', data: formData }} />
            <Select {...{ onSelect, disabled, name: 'document', data: formData }} />
            <Select {...{ onSelect, disabled, name: 'mark', data: formData }} />

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
