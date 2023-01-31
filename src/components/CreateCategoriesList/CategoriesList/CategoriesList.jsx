import React from 'react';
import Category from '../Category/Category';
import { useSectionsList } from '../CreateCategoriesList';

import s from './CategoriesList.module.scss';

const CategoriesList = ({ owner, section }) => {
  const { categoriesArr } = useSectionsList();

  const myCategoiesArr = categoriesArr.filter(el => el.owner === owner?._id);
  const categoriesCount = myCategoiesArr.length;

  return (
    <>
      {categoriesCount > 0 && (
        <div className={s.categoriesListContainer}>
          <div className={s.categoriesList}>
            {myCategoiesArr.length !== 0 && (
              <>
                {myCategoiesArr.map(item => (
                  <Category key={item._id} category={item} owner={owner} section={section} />
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoriesList;
