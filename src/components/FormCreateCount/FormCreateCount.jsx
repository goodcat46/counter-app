import React, { useState } from 'react';
import Input from 'components/Input/Input';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { countsSelector } from 'redux/selectors.store.';
import Select from 'components/Select/Select';
import { Button } from '@mui/material';
import { useModal } from 'components/ModalContent/Modal';
import { addCountThunk } from 'redux/counts/counts.thunks';
import { toast } from 'react-toastify';

import s from './FormCreateCount.module.scss';

const FormCreateCount = () => {
  const [formData, setFormData] = useState({});
  const [selectedParent, setSelectedParent] = useState(null);
  const dispatch = useDispatch();
  const modal = useModal();
  const { counts = [] } = useSelector(countsSelector);

  let filteredCounts = counts.filter(opt => !opt?.owner);
  let options = filteredCounts.map(opt => {
    return { label: `${opt?.name} (${opt?.type}) (${opt?.code})`, value: opt?._id, name: 'owner', type: opt?.type };
  });

  function onChange(ev) {
    const { name, value } = ev.target;

    setFormData(prev => {
      return { ...prev, [name]: value };
    });
  }
  function onSelect({ value }) {
    // console.log(value, { [value?.name]: value?.value });

    setFormData(prev => {
      return { ...prev, [value?.name]: value?.value };
    });
    setSelectedParent(value);

    console.log(selectedParent);
  }
  function onReset(ev) {
    modal.handleToggleModal();
  }
  function onSubmit(ev) {
    ev.preventDefault();
    toast.error('error.message');
    const payload = {
      submitData: formData,
      onSuccess: response => {
        console.log(response);

        toast.success('Рахунок створено');
        // modal.handleToggleModal();
      },
      onError: error => {
        console.log('error ==========!!!!!!', error);

        toast.error(error.message);
      },
    };

    dispatch(addCountThunk(payload));
    setFormData({});
  }

  return (
    <div>
      <form className={s.subForm} onSubmit={onSubmit} onReset={onReset}>
        <div className={s.header}>
          <span>Створення рахунку</span>
        </div>
        <div className={s.inputs}>
          <Select {...{ onSelect, required: true, label: 'Батьківський рахунок', name: 'owner', options: options }} />

          <Select
            {...{
              onSelect,
              label: 'Тип',
              name: 'type',
              options: [
                { label: 'ПАСИВНИЙ', value: 'PASSIVE', name: 'type' },
                { label: 'АКТИВНИЙ', value: 'ACTIVE', name: 'type' },
              ],
            }}
          />

          <Input {...{ onChange, label: 'Назва', name: 'name' }} />
          <Input {...{ onChange, label: 'Код', type: 'number', name: 'code' }} />
          <Input {...{ onChange, label: 'Баланс', type: 'number', name: 'balance' }} />
          <Input {...{ onChange, label: 'Опис', name: 'descr' }} />
        </div>
        <div className={s.btns}>
          <Button type="submit">Прийняти</Button>
          <Button type="reset">Відхилити</Button>
        </div>
      </form>
    </div>
  );
};

export default FormCreateCount;
