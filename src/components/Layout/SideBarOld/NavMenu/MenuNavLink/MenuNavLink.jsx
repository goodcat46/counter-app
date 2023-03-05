import { NavLink } from 'react-router-dom';

import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './MenuNavLink.module.scss';

const MenuNavLink = ({ item }) => {
  return (
    <>
      <NavLink to={`/${item.path}`} className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)}>
        {item.iconId && <SvgIcon iconId={item.iconId} size="18px" svgClass={s.icon} />}
        <span>{item.title}</span>
      </NavLink>
    </>
  );
};

export default MenuNavLink;
