import React, { createContext, useContext, useEffect, useState } from 'react';
import Header from './Header/Header';
import DesktopFooter from 'components/Layout/DesktopFooter/DesktopFooter';
import SideBar from './SideBar/SideBar';
import { baseURL } from 'api';
import { useDispatch } from 'react-redux';
import { getAllCategoriesThunk } from 'redux/categories/categoriesThunks';
import { getAllCountsThunk } from 'redux/counts/counts.thunks';
import { getAllTransactionsThunk } from 'redux/transactions/transactions.thunks';
import { toast } from 'react-toastify';

// import s from './Layout.module.scss';
export const LayoutCTX = createContext();
export const useLayout = () => useContext(LayoutCTX);

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const [footerChildren, setFooterChildren] = useState(null);

  function handleSetFooterContent(content) {
    if (!content) {
      setFooterChildren(null);
      return;
    }
    setFooterChildren(content);
  }

  const CTX = {
    handleSetFooterContent,
  };

  useEffect(() => {
    if (window.location.hostname === 'localhost') {
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
      baseURL.setLocalhost();
      dispatch(getAllCategoriesThunk(payload('Categories')));
      dispatch(getAllCountsThunk(payload('Counts')));
      dispatch(getAllTransactionsThunk(payload('Transactions')));
    }
  }, [dispatch]);
  return (
    <>
      <LayoutCTX.Provider value={CTX}>
        <SideBar>
          <Header />

          {children}

          <DesktopFooter>
            <>{footerChildren}</>
          </DesktopFooter>
        </SideBar>
      </LayoutCTX.Provider>
    </>
  );
};

export default Layout;
