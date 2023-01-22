import React, { useState } from 'react';

import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import MenuNavLink from './MenuNavLink/MenuNavLink';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserData } from 'redux/selectors';
import { pagesRoutes } from 'data/pagesRoutes';

import s from './NavMenu.module.scss';

const NavMenu = ({ size = '30px' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navLinks, setNavLinks] = useState([]);
  const { user } = useSelector(getUserData);

  // const pagesRoutesArr = pagesRoutes.length > 0 ? pagesRoutes : [];

  function handleToggleMenu(ev) {
    if (!isOpen) {
      window.addEventListener('click', handleCloseNavMenu);
      setIsOpen(true);
      return;
    }

    if (isOpen) {
      window.removeEventListener('click', handleCloseNavMenu);
      setIsOpen(false);
      return;
    }
  }
  function handleCloseNavMenu(ev) {
    let { target } = ev;
    if (target.id !== 'OpenNavMenuBtn') {
      setIsOpen(false);
      window.removeEventListener('click', handleCloseNavMenu);
      return;
    }
  }

  useEffect(() => {
    const pagesRoutesArr = pagesRoutes.filter(el => el?.roles.includes(user?.role) && el?.status.includes(user?.status));

    setNavLinks(pagesRoutesArr);
  }, [user?.role, user?.status]);
  return (
    <div className={isOpen ? s.menuOpen : s.menu}>
      <ButtonIcon
        iconId={isOpen ? 'close' : 'burger'}
        size={size}
        iconSize="100%"
        className={s.button}
        styles={{ padding: 0 }}
        id="OpenNavMenuBtn"
        onClick={handleToggleMenu}
      />

      <ul className={[s.navList, 'theme'].join(' ')}>
        {navLinks.map(link => (
          <MenuNavLink key={link.path} item={link} />
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
