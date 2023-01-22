import React from 'react';

import UserMenu from '../UserMenu/UserMenu';
import Notifications from 'components/Notify/Notifications/Notifications';
import PrivateComponent from 'components/PrivateComponent/PrivateComponent';
import { Link } from 'react-router-dom';

import s from './Header.module.scss';
const Header = () => {
  return (
    <header className={[s.header, 'theme'].join(' ')}>
      <Link to="/home" className={s.logoLink}>
        <span className={s.logoText}>LOGO</span>
      </Link>

      <div></div>

      <PrivateComponent>
        <Notifications />

        <UserMenu />
      </PrivateComponent>
    </header>
  );
};

export default Header;
