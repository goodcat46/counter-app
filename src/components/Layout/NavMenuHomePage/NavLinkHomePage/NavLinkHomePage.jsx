import { NavLink } from 'react-router-dom';

import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './NavLinkHomePage.module.scss';

const NavLinkHomePage = ({ item }) => {
  return (
    <>
      <li>
        <NavLink to={`/${item.path}`} className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)}>
          {item.iconId && <SvgIcon iconId={item.iconId} size="65%" />}
          <span>{item.title}</span>
        </NavLink>
      </li>
    </>
  );
};

export default NavLinkHomePage;
