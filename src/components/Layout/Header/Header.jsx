import React from 'react';

import UserMenu from '../UserMenu/UserMenu';
import PrivateComponent from 'components/PrivateComponent/PrivateComponent';
import { Link } from 'react-router-dom';

import s from './Header.module.scss';
const Header = () => {
  return (
    <header className={[s.header, 'theme'].join(' ')}>
      <Link to="/transactions" className={s.logoLink}>
        <span className={s.logoText}>ACCOUNER lite</span>
      </Link>

      <div></div>

      <PrivateComponent>
        <UserMenu />
      </PrivateComponent>
    </header>
  );
};

export default Header;
