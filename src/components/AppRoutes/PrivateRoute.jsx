import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserData } from 'redux/selectors';
export default function PrivateRoute({ redirectTo, ...routeProps }) {
  const { isLoggedIn } = useSelector(getUserData);

  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} replace={true} />;
}

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
};
