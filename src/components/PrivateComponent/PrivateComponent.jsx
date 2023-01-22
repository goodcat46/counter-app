import React from 'react';
import { useSelector } from 'react-redux';
import { getUserData } from 'redux/selectors';

const PrivateComponent = ({ children }) => {
  const user = useSelector(getUserData);

  return user.isLoggedIn ? <>{children}</> : null;
};

export default PrivateComponent;
