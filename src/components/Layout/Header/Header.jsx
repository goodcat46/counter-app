import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import LogoSvg from './LogoSvg/LogoSvg';

import s from './Header.module.scss';
import ActionToggleSideBar from '../SideBarLeft/ActionToggleSideBar/ActionToggleSideBar';
import UserMenu from '../UserMenu/UserMenu';

const Header = () => {
  return (
    <header className={[s.header, 'header'].join(' ')}>
      <ActionToggleSideBar />

      <LogoSvg />

      <NavMenu onTop />

      <div className={s.rightSide}>
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
