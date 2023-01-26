import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import DesktopFooter from 'components/Layout/DesktopFooter/DesktopFooter';
// import MobileFooter from 'components/Layout/MobileFooter/MobileFooter';

import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionSetIndexPage } from 'redux/page/pageActions';

import s from './AppGridPage.module.scss';

const AppGridPage = ({ path }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (path) {
      dispatch(actionSetIndexPage(path));
    }
  }, [dispatch, path]);

  return (
    <>
      <div className={s[path] || s.pageGrid}>
        <Outlet />
      </div>

      {/* <DesktopFooter />
      <MobileFooter path={path} /> */}
    </>
  );
};

AppGridPage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default AppGridPage;
