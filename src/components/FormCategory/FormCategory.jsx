import React, { useState } from 'react';
import Input from 'components/Input/Input';
import Select from 'components/Select/Select';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { categoriesSelector } from 'redux/selectors.store';
import { Button } from '@mui/material';
import { useModal } from 'components/ModalContent/Modal';
import { toast } from 'react-toastify';
import { selects, getOwnerOptions } from 'data';

import s from './FormCategory.module.scss';
import { addCategoryThunk } from 'redux/categories/categoriesThunks';

const FormCategory = () => {
  const [formData, setFormData] = useState({});
  const [selectedParent, setSelectedParent] = useState(null);
  const dispatch = useDispatch();
  const modal = useModal();
  const { categories = [] } = useSelector(categoriesSelector);

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

    const payload = {
      submitData: formData,
      onSuccess: response => {
        console.log(response);

        toast.success('Категорію створено');
        // modal.handleToggleModal();
      },
      onError: error => {
        toast.error(error.message);
      },
    };

    dispatch(addCategoryThunk(payload));
    setFormData({});
  }

  return (
    <div>
      <form className={s.subForm} onSubmit={onSubmit} onReset={onReset}>
        <div className={s.header}>
          <span>Створення категорії</span>
        </div>
        <div className={s.inputs}>
          <Select {...{ onSelect, ...selects.parentCategory, options: getOwnerOptions(categories) }} />

          <Input {...{ onChange, label: 'Назва', name: 'name' }} />

          <Select
            {...{
              onSelect,
              ...selects.categoryType,
            }}
          />

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

export default FormCategory;
