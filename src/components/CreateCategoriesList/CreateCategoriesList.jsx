import { createContext, useContext } from 'react';
import SectionItem from './SectionItem/SectionItem';
import FormCreateSection from './FormCreateSection/FormCreateSection';
// import { useDispatch } from 'react-redux';
// import { getAllCategoriesThunk } from 'redux/categories/categories.thunks';

import s from './CreateCategoriesList.module.scss';
// import { toast } from 'react-toastify';
import AppLoader from 'components/AppLoader/AppLoader';

export const SectionsListContext = createContext();
export const useSectionsList = () => useContext(SectionsListContext);

const CreateCategoriesList = ({ dataArr, isLoading, error }) => {
  // const dispatch = useDispatch();

  const ctx = {
    parentsArr: dataArr.filter(el => !el?.owner),
    childsArr: dataArr.filter(el => el?.owner),
  };

  // useEffect(() => {
  //   const payload = {
  //     submitData: {},
  //     onSuccess: data => {
  //       console.log(data);
  //     },
  //     onError: error => {
  //       toast.error(`${error.message}`);
  //     },
  //   };
  //   dispatch(getAllCategoriesThunk(payload));
  // }, [dispatch]);

  return (
    <>
      <AppLoader isLoading={isLoading} />
      <SectionsListContext.Provider value={{ ...ctx }}>
        <div className={s.container}>
          {!error && (
            <div>
              {ctx.sectionsArr.length > 0 && (
                <ul className={[s.sectionsList].join(' ')}>
                  {ctx.sectionsArr.map(item => {
                    return <SectionItem key={item._id} section={item} />;
                  })}
                </ul>
              )}
            </div>
          )}

          {error && (
            <div className={s.wrapper}>
              <span className={error ? s.error : s.empty}>
                <>{error ? error : `Секції та категорії відсутні`}</>
              </span>
            </div>
          )}

          <FormCreateSection />
        </div>
      </SectionsListContext.Provider>
    </>
  );
};

export default CreateCategoriesList;
