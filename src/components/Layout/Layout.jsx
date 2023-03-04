import React, { createContext, useContext, useEffect } from 'react';
import Header from './Header/Header';
// import DesktopFooter from 'components/Layout/DesktopFooter/DesktopFooter';
// import SideBar from './SideBar/SideBar';
import { baseURL } from 'api';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoriesThunk } from 'redux/categories/categoriesThunks';
import { getAllCountsThunk } from 'redux/counts/counts.thunks';
import { getAllTransactionsThunk } from 'redux/transactions/transactions.thunks';
import { toast } from 'react-toastify';
import { categoriesSelector } from 'redux/selectors.store';
import SideBar from './SideBarLeft/SideBar';

import s from './Layout.module.scss';
export const LayoutCTX = createContext();
export const useLayout = () => useContext(LayoutCTX);

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  // const [footerChildren, setFooterChildren] = useState(null);
  const { error } = useSelector(categoriesSelector);

  // function handleSetFooterContent(content) {
  //   if (!content) {
  //     setFooterChildren(null);
  //     return;
  //   }
  //   setFooterChildren(content);
  // }

  const CTX = {
    // handleSetFooterContent,
  };

  useEffect(() => {
    if (window.location.hostname === 'localhost') return;

    const payload = thunkName => {
      return {
        onSuccess: response => {
          console.log(response.data);
        },
        onError: error => {
          toast.error(`${thunkName} - ${error.message}`);
        },
      };
    };

    if (window.location.hostname !== 'localhost') {
      baseURL.setLocalhost();
    }
    dispatch(getAllCategoriesThunk(payload('Categories')));
    dispatch(getAllCountsThunk(payload('Counts')));
    dispatch(getAllTransactionsThunk(payload('Transactions')));
  }, [dispatch, error]);
  return (
    <>
      <LayoutCTX.Provider value={CTX}>
        <div className={s.layoutGrid}>
          <Header />

          <SideBar />

          <div className={s.children}>{children}</div>
        </div>

        {/* <SideBar>
          <DesktopFooter>
            <>{footerChildren}</>
          </DesktopFooter>
        </SideBar> */}
      </LayoutCTX.Provider>
    </>
  );
};

export default Layout;
