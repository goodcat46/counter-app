import { useMediaQuery } from 'react-responsive';
import { Navigate, Outlet } from 'react-router-dom';
const LITTLE_MOBILE = 279;
const MOBILE_END=479
const TABLET_START=480
const TABLET_END=767
const TABLET_MAX_START=768
const TABLET_MAX_END=1099
const DESKTOP_START = 1100;
export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: DESKTOP_START });
  return isDesktop ? children : null;
};
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: TABLET_START, maxWidth: TABLET_END });
  return isTablet ? children : null;
};
export const TabletXL = ({ children }) => {
  const isTabletXl = useMediaQuery({ minWidth: TABLET_MAX_START, maxWidth: DESKTOP_START });
  return isTabletXl ? children : null;
};
export const AllTablets = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: TABLET_START, maxWidth: TABLET_MAX_END });
  return isTablet ? children : null;
};
export const LiitleMobile = ({ children }) => {
  const isLittleMobile = useMediaQuery({ maxWidth: LITTLE_MOBILE });
  return isLittleMobile ? children : null;
};
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_END });
  return isMobile ? children : null;
};
export const MaxToTablet = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: TABLET_END });
  return isTablet ? children : null;
};
export const MaxToTabletXl = ({ children }) => {
  const isTabletXL = useMediaQuery({ maxWidth: DESKTOP_START });
  return isTabletXL ? children : null;
};
export const MinTabletXl = ({ children }) => {
  const isTabletXL = useMediaQuery({ minWidth: TABLET_MAX_START });
  return isTabletXL ? children : null;
};
export const NotMobile = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: TABLET_MAX_START });
  return isNotMobile ? children : null;
};
export const NotMobileRoute = ({ redirectTo }) => {
  const isMobile = useMediaQuery({ minWidth: MOBILE_END });
  return isMobile ? <Outlet /> : <Navigate to={redirectTo} />;
};
export const MobileRoute = ({ redirectTo }) => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_END });
  return isMobile ? <Outlet /> : <Navigate to={redirectTo} />;
};
export const MaxTabletRoute = ({ redirectTo }) => {
  const isTablet = useMediaQuery({ maxWidth: TABLET_END });
  return isTablet ? <Outlet /> : <Navigate to={redirectTo} />;
};
export const MinTabletXlRoute = ({ redirectTo }) => {
  const isTabletXl = useMediaQuery({ minWidth: TABLET_MAX_START });
  return isTabletXl ? <Outlet /> : <Navigate to={redirectTo} />;
};
