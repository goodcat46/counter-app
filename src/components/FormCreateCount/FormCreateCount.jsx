import React, { useState } from 'react';
import Input from 'components/Input/Input';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { countsSelector } from 'redux/selectors.store';
import Select from 'components/Select/Select';
import { Button } from '@mui/material';
import { useModal } from 'components/ModalContent/Modal';
import { addCountThunk } from 'redux/counts/counts.thunks';
import { toast } from 'react-toastify';
import { selects, getOwnerOptions } from 'data';

import s from './FormCreateCount.module.scss';

const FormCreateCount = () => {
  const [formData, setFormData] = useState({});
  const [selectedParent, setSelectedParent] = useState(null);
  const dispatch = useDispatch();
  const modal = useModal();
  const { counts = [] } = useSelector(countsSelector);

  function onChange(ev) {
    const { name, value } = ev.target;

    setFormData(prev => {
      return { ...prev, [name]: value };
    });
  }
  function onSelect({ value }) {
    setFormData(prev => {
      return { ...prev, [value?.name]: value?.value };
    });
    setSelectedParent(value);
    console.log('value', value, selectedParent);
  }
  function onReset(ev) {
    modal.handleToggleModal();
  }
  function onSubmit(ev) {
    ev.preventDefault();

    const payload = {
      submitData: formData,
      onSuccess: response => {
        console.log(response);

        toast.success(response?.data?.message);

        modal.handleToggleModal();
      },
      onError: error => {
        toast.error(error.message);
      },
    };

    console.log(payload);
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
          <Select {...{ onSelect, ...selects.parentCount, options: getOwnerOptions(counts) }} />

          <Input {...{ onChange, label: 'Назва', name: 'name', required: true }} />

          <Select
            {...{
              onSelect,
              ...selects.countType,
            }}
          />

          <Input {...{ onChange, label: 'Код', type: 'number', name: 'code', required: true }} />
          <Input {...{ onChange, label: 'Баланс', type: 'number', name: 'balance' }} />
          <Input {...{ onChange, label: 'Опис', name: 'descr' }} />
        </div>
        <div className={s.btns}>
          <Button type="submit">Прийняти</Button>
          <Button type="reset" onClick={() => toast.info('sdfbfgxc')}>
            Відхилити
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormCreateCount;
