import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import LogoSvg from './LogoSvg/LogoSvg';

import s from './Header.module.scss';
import ActionToggleSideBar from '../SideBarLeft/ActionToggleSideBar/ActionToggleSideBar';
import UserMenu from '../UserMenu/UserMenu';

const HeaderLeftSideItems = [
  {
    id: '1',
    Component: ActionToggleSideBar,
  },
  {
    id: '2',
    Component: LogoSvg,
  },
  {
    id: '3',
    Component: NavMenu,
    props: { onTop: true },
  },
];
const HeaderRightSideItems = [
  {
    id: '1',
    Component: UserMenu,
  },
];
const Header = () => {
  return (
    <header className={[s.header, 'header'].join(' ')}>
      <div className={s.leftSide}>
        {HeaderLeftSideItems.map(({ Component, id, props = {} }) => (
          <div key={id} className={s.box}>
            <Component {...props} />
          </div>
        ))}
      </div>

      <div className={s.rightSide}>
        {HeaderRightSideItems.map(({ Component, id, props = {} }) => (
          <div key={id} className={s.box}>
            <Component {...props} />
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
