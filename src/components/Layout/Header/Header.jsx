import React from 'react';
import logoIpsum from '../../../img/logoIpsum.png';

import { Link } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';

import s from './Header.module.scss';
const Header = () => {
  return (
    <header className={[s.header, 'header'].join(' ')}>
      <Link to="/transactions" className={s.logoLink}>
        <img src={logoIpsum} alt="logoIpsum" />
      </Link>

      <NavMenu onTop />
    </header>
  );
};

export default Header;
