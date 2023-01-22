import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { useParams } from 'react-router-dom';

import s from './MobileNavLink.module.scss';

const MobileNavLink = ({ device, path, iconId, title, navLink = true }) => {
  const { id } = useParams();
  return (
    <>
      {navLink && (
        <NavLink to={id ? `${id}/${path}` : path} className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)} title={title}>
          <SvgIcon iconId={iconId} size="20px" />
          <span className={s.linkTitle}>{title}</span>
        </NavLink>
      )}
      {!navLink && (
        <Link to={id ? `${path}/${id}` : path} className={s.navLink} title={title}>
          <SvgIcon iconId={iconId} size="20px" />
          <span className={s.linkTitle}>{title}</span>
        </Link>
      )}
    </>
  );
};

export default MobileNavLink;
