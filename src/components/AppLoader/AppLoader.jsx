import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import PropTypes from 'prop-types';

const AppLoader = ({ isLoading }) => {
  // if (!isLoading) {
  //   return null;
  // }
  return (
    <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={isLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

AppLoader.propTypes = {
  isLoading: PropTypes.bool,
};

export default AppLoader;
