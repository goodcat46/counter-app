// import { Button } from '@mui/material';
// import SvgIcon from 'components/SvgIcon/SvgIcon';
import React from 'react';
import { pages } from 'data';
import MenuNavLink from './MenuNavLink/MenuNavLink';

import s from './NavMenu.module.scss';

const NavMenu = () => {
  return (
    <>
      <div className={s.navMenu}>
        {pages.map(({ title, path, iconId }) => (
          <MenuNavLink key={title} item={{ title, path, iconId }}>
            {/* <div className={s.wrapper}>
              <SvgIcon {...{ iconId }} size="18px" />
              <span>{title}</span>
            </div> */}
          </MenuNavLink>
        ))}
      </div>
    </>
  );
};

export default NavMenu;
