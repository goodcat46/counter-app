import React, { useState } from 'react';
import Input from 'components/Input/Input';
import Select from 'components/Select/Select';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { categoriesSelector } from 'redux/selectors.store';
import { useModal } from 'components/ModalContent/Modal';
import { toast } from 'react-toastify';
import { selects, getOwnerOptions } from 'data';

import s from './FormCategory.module.scss';
import { addCategoryThunk } from 'redux/categories/categoriesThunks';
import FormButtons from './FormButtons/FormButtons';

const FormCategory = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const modal = useModal();
  const { categories = [] } = useSelector(categoriesSelector);

  const [closeAfterSubmit, setCloseAfterSubmit] = useState(true);
  const [clearAfterSubmit, setClearAfterSubmit] = useState(true);

  function nandleCloseAfterSubmit(ev) {
    const { checked } = ev.target;
    toast.info(`Форма ${!checked ? ' не ' : ' '}закриється після підтвердження`);

    setCloseAfterSubmit(checked);
  }
  function nandleClearAfterSubmit(ev) {
    const { checked } = ev.target;
    toast.info(`Форма${!checked ? ' не ' : ' '}очиститься після підтвердження`);

    setClearAfterSubmit(checked);
  }

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

    dispatch(addCategoryThunk(payload));

    if (clearAfterSubmit) {
      setFormData({});
    }
    if (closeAfterSubmit) {
      modal.handleToggleModal();
    }
  }

  return (
    <div>
      <form className={s.subForm} onSubmit={onSubmit} onReset={onReset}>
        <div className={s.header}>
          <span>Створення категорії</span>
        </div>
        <div className={s.inputs}>
          <Select
            {...{
              onSelect,
              ...selects.categoryType,
            }}
          />

          <Select
            {...{
              onSelect,
              ...selects.parentCategory,
              options: getOwnerOptions(categories).filter(el => el.type === formData.type),
            }}
          />

          <Input {...{ onChange, label: 'Назва', name: 'name' }} />

          <Input {...{ onChange, label: 'Опис', name: 'descr' }} />
        </div>

        <FormButtons
          {...{
            disabled: false,
            nandleCloseAfterSubmit,
            closeAfterSubmit,
            nandleClearAfterSubmit,
            clearAfterSubmit,
          }}
        />
      </form>
    </div>
  );
};

export default FormCategory;
