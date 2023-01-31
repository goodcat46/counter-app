import React, { useState } from 'react';
import CategoryList from '../CategoriesList/CategoriesList';
import FormCreateCategory from '../FormCreateCategory/FormCreateCategory';
// import SvgIcon from 'components/SvgIcon/SvgIcon';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useSectionsList } from '../CreateCategoriesList';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { editCategoryThunk } from 'redux/categories/categories.thunks';
import s from './Category.module.scss';

const Category = ({ category, owner, section }) => {
  const { categoriesArr } = useSectionsList();
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();

  const myCategoiesArr = categoriesArr.filter(el => el.owner === category._id);
  const categoriesCount = myCategoiesArr.length;
  const renderList = isShow && categoriesCount > 0;

  const categoryClassList = [s.childrenContainer, isShow && s.isShow].join(' ');
  const categoryOwnerClassList = [s.children, isShow && s.isShow].join(' ');

  function handleShowBtnClick() {
    setIsShow(!isShow);
  }

  function handleArchiveCategory() {
    const payload = {
      submitData: {
        id: category._id,
        updateData: {
          isArchived: !category.isArchived,
        },
      },
      onSuccess: ({ isArchived }) => {
        toast.success(`${isArchived ? 'Архівовано' : 'Розархівовано'} "${category.name}"`);
      },
      onError: () => {
        toast.error('Помилка архівації');
      },
    };

    dispatch(editCategoryThunk(payload));
  }

  return (
    <>
      <div className={categoryClassList}>
        <div className={categoryOwnerClassList}>
          <div>
            <div className={s.name}>{`${category.name} (${categoriesCount})`}</div>
            <div className={s.id}>{`(${category._id}) `}</div>
          </div>

          <div className={s.actions}>
            <ButtonIcon
              iconId={!category.isArchived ? 'archive' : 'unArchive'}
              size="32px"
              iconSize="100%"
              className={[s.actionBtn, category.isArchived && s.filled].join(' ')}
              onClick={handleArchiveCategory}
            />
          </div>

          <ButtonIcon iconId="select-arrow" size="32px" className={s.showBtn} iconClassName={s.icon} onClick={handleShowBtnClick} />
        </div>

        {renderList && <CategoryList owner={category} section={section} />}

        {isShow && <FormCreateCategory owner={category} section={section} />}
      </div>
    </>
  );
};

export default Category;
