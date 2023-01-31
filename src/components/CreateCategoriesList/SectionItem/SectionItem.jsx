import React, { useState } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import CategoriesList from '../CategoriesList/CategoriesList';
import FormCreateCategory from '../FormCreateCategory/FormCreateCategory';
// import { useSectionsList } from '../CreateCategoriesList';

import s from './SectionItem.module.scss';

const SectionItem = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleShowBtnClick() {
    setIsOpen(!isOpen);
  }

  return (
    <li className={[s.sectionItemContainer, isOpen && s.isOpen].join(' ')}>
      <div className={s.sectionItem}>
        <div className={s.nameWrapper}>
          <span className={s.name}>{`Секція: ${section?.name}`}</span>
          <span className={s.id}>{`(${section?._id})`}</span>
        </div>

        <ButtonIcon iconClassName={s.icon} iconId="select-arrow" size="32px" className={s.openBtn} onClick={handleShowBtnClick} />
      </div>

      {isOpen && (
        <>
          <CategoriesList owner={section} section={section} />

          <FormCreateCategory owner={section} section={section} />
        </>
      )}
    </li>
  );
};

export default SectionItem;
