import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

import { getUserData } from 'redux/selectors';

import { useSelector } from 'react-redux';

const AdminRoute = ({ redirectTo, ...routeProps }) => {
  const { isLoggedIn, user } = useSelector(getUserData);
  const isAdmin = user.role === 'ADMIN';
  return isLoggedIn && isAdmin ? <Outlet /> : <Navigate to={redirectTo} replace={true} />;
};

AdminRoute.propTypes = {
  redirectTo: PropTypes.string,
};
export default AdminRoute;
