import React, { useEffect } from 'react';
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
const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.hostname === 'localhost') {
      const payload = thunkName => {
        return {
          onSuccess: response => {},
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
      <SideBar>
        <Header />

        {children}

        <DesktopFooter />
      </SideBar>
    </>
  );
};

export default Layout;
