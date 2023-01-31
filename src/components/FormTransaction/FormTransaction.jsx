import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Select from 'components/Select/Select';
import Input from 'components/Input/Input';
import { useModal } from 'components/ModalContent/Modal';
import { useSelector } from 'react-redux';
import { categoriesSelector, countsSelector } from 'redux/selectors.store';
import SelectDbl from 'components/Select/SelectDbl';
import { selects } from 'data';

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
  function onSelect({ data }) {
    setFormData(prev => {
      return { ...prev, [data?.name]: data?.value };
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

            <Select {...{ onSelect, disabled, data: formData }} {...selects.trType} />

            <SelectDbl
              options={counts}
              onSelect={onSelect}
              parentName={selects.countIn.name}
              parentLabel={selects.countIn.label}
              childName={selects.subCountIn.name}
              childLabel={selects.subCountIn.label}
              formData={formData}
              disabled={formData.type === 'EXPENSE'}
            />

            <SelectDbl
              options={counts}
              onSelect={onSelect}
              parentName={selects.countOut.name}
              parentLabel={selects.countOut.label}
              childName={selects.subCountOut.name}
              childLabel={selects.subCountOut.label}
              formData={formData}
              disabled={formData.type === 'INCOME'}
            />

            <SelectDbl
              options={categories.filter(option => option?.type === formData?.type)}
              onSelect={onSelect}
              parentName={selects.category.name}
              parentLabel={selects.category.label}
              childName={selects.subCategory.name}
              childLabel={selects.subCategory.label}
              formData={formData}
              disabled={!formData.type}
            />
            <Input {...{ ...inputs.amount, onChange, disabled, data: formData }} />

            <Select {...{ onSelect, disabled, data: formData }} {...selects.project} />
            <Select {...{ onSelect, disabled, data: formData }} {...selects.document} />
            <Select {...{ onSelect, disabled, data: formData }} {...selects.mark} />

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
