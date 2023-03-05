import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { pages } from 'data';
import { iconId } from 'data';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import s from './NavMenu.module.scss';

const NavMenu = ({ onTop, onBottom }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState(pages[0]);
  const location = useLocation();

  function handleOpenNavMenu() {
    setIsOpen(!isOpen);
  }
  function handleSetActivePage(page) {
    setActivePage(page);
  }
  function onNavLinkClick(item) {
    handleSetActivePage(item);

    handleOpenNavMenu();
  }

  useEffect(() => {
    const currentPathName = location.pathname.replace('/', '');

    const currentPageData = pages.find(page => page.path === currentPathName);

    setActivePage(currentPageData);
  }, [location.pathname]);

  useEffect(() => {
    function onMenuClose(ev) {
      const { target, code } = ev;
      if (!target.closest('[data-nav-menu]')) setIsOpen(false);
      if (code === 'Escape') setIsOpen(false);
    }
    window.addEventListener('click', onMenuClose);
    window.addEventListener('keydown', onMenuClose);

    return () => {
      window.removeEventListener('click', onMenuClose);
      window.removeEventListener('keydown', onMenuClose);
    };
  }, []);

  return (
    <div className={[s.navMenu, isOpen && s.isOpen].join(' ')} data-nav-menu>
      <div className={s.container}>
        <ButtonIcon
          className={s.navMenuBnt}
          endIconId={iconId.arrowDown}
          endIconClassName={s.svgIcon}
          onClick={handleOpenNavMenu}
        >
          {activePage?.title}
        </ButtonIcon>

        <div className={s.navList}>
          {pages.map(item => {
            return (
              <NavLink
                key={item?.path}
                to={item?.path}
                className={({ isActive }) => {
                  if (isActive) {
                    // handleSetActivePage(item);
                    return s.activeLink;
                  }
                  return s.navLink;
                }}
                onClick={() => {
                  onNavLinkClick(item);
                }}
              >
                <SvgIcon iconId={item.iconId} size="18px" />
                {item?.title || '---'}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
