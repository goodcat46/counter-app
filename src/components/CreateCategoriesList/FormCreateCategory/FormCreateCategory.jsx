import PrimaryInput from 'components/Forms/Inputs/PrimaryInput/PrimaryInput';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

import { useDispatch } from 'react-redux';
import { addCategoryThunk } from 'redux/categories/categories.thunks';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Button } from '@mui/material';

import s from './FormCreateCategory.module.scss';

const FormCreateCategory = ({ owner, section, isSection = false }) => {
  const [categoryName, setCategoryName] = useState('');
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  function handleOpenForm(ev) {
    setShowForm(!showForm);
  }
  function onInputChange(ev) {
    const { value } = ev.target;
    setCategoryName(value);
  }
  function handleAddSection(ev) {
    ev.preventDefault();

    const payload = {
      submitData: {
        name: categoryName,
        owner: owner._id,
        ownerName: owner.name,
        section: section._id,
        sectionName: section.name,
      },
      onSuccess: () => {
        toast.success(`Створено під-категорію "${categoryName}"`);
      },
      onError: () => {
        toast.error('Помилка створення під-категорії');
      },
    };
    // console.log(payload);
    if (!categoryName) {
      payload.onError();
      return;
    }
    dispatch(addCategoryThunk(payload));
    setCategoryName('');
  }
  return (
    <>
      {showForm && (
        <form className={s.addForm} onSubmit={handleAddSection}>
          <PrimaryInput label="Назва під-категорії" value={categoryName} onChange={onInputChange} />

          <ButtonIcon className={s.addBtn} iconId="plus" type="submit" styleType="BrandClrBtn" disabled={!categoryName}>
            Додати
          </ButtonIcon>

          <ButtonIcon className={s.addBtn} iconId="close" styleType="ErrorClrBtn" onClick={handleOpenForm}>
            Відміна
          </ButtonIcon>
        </form>
      )}
      {!showForm && (
        <>
          <Button onClick={handleOpenForm}>{`Створити під-категорію у "${owner.name}"`}</Button>
        </>
      )}
    </>
  );
};

export default FormCreateCategory;
