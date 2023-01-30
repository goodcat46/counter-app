import React, { useEffect } from 'react';
import Header from './Header/Header';
import DesktopFooter from 'components/Layout/DesktopFooter/DesktopFooter';
import { baseURL } from 'api';
import { useDispatch } from 'react-redux';
import { getAllCategoriesThunk } from 'redux/categories/categoriesThunks';
import { getAllCountsThunk } from 'redux/counts/counts.thunks';
import { getAllTransactionsThunk } from 'redux/transactions/transactions.thunks';

// import s from './Layout.module.scss';
const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.hostname === 'localhost') {
      baseURL.setLocalhost();
      dispatch(getAllCategoriesThunk());
      dispatch(getAllCountsThunk());
      dispatch(getAllTransactionsThunk());
    }
  }, [dispatch]);
  return (
    <>
      <Header />
      {children}
      <DesktopFooter />
    </>
  );
};

export default Layout;
