import React from 'react';
import Header from './Header/Header';

// import PropTypes from 'prop-types';

// import s from './Layout.module.scss';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

Layout.propTypes = {};

export default Layout;
