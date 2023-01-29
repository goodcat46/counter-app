import React from 'react';
import Header from './Header/Header';
import DesktopFooter from 'components/Layout/DesktopFooter/DesktopFooter';

// import PropTypes from 'prop-types';

// import s from './Layout.module.scss';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <DesktopFooter />
    </>
  );
};

Layout.propTypes = {};

export default Layout;
