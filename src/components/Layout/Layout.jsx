import React, { useEffect } from 'react';
import Header from './Header/Header';
import DesktopFooter from 'components/Layout/DesktopFooter/DesktopFooter';
import { baseURL } from 'api';
import { useDispatch } from 'react-redux';
import { getAllCategoriesThunk } from 'redux/categories/categoriesThunks';
import { getAllCountsThunk } from 'redux/counts/counts.thunks';
import { getAllTransactionsThunk } from 'redux/transactions/transactions.thunks';
import { toast } from 'react-toastify';
import NavMenu from './SideBar/SideBar';

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
      dispatch(getAllCategoriesThunk(payload('categories')));
      dispatch(getAllCountsThunk(payload('counts')));
      dispatch(getAllTransactionsThunk(payload('transactions')));
    }
  }, [dispatch]);
  return (
    <>
      <NavMenu>
        <Header />

        {children}

        <DesktopFooter />
      </NavMenu>
    </>
  );
};

export default Layout;
