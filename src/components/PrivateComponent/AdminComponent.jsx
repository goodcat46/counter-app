import React from 'react';
import { useSelector } from 'react-redux';
import { getUserData } from 'redux/selectors';

const AdminComponent = ({ children }) => {
  const { user } = useSelector(getUserData);

  return user.role === 'ADMIN' ? <>{children}</> : null;
};

export default AdminComponent;
