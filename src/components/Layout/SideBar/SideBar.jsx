import React, { createContext, useContext, useState } from 'react';

// import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
// import MenuNavLink from './MenuNavLink/MenuNavLink';
import Portal from 'components/Portal/Portal';
import { iconId } from 'data';

import CreateActions from './CreateActions/CreateActions';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserData } from 'redux/selectors.store';
// import { pagesRoutes } from 'data/pagesRoutes';

import { Button } from '@mui/material';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import AccordeonItem from 'components/AccordeonItem/AccordeonItem';
import MenuNavLink from './MenuNavLink/MenuNavLink';

import s from './SideBar.module.scss';

export const SideBarCTX = createContext();
export const useSideBar = () => useContext(SideBarCTX);

const SideBar = ({ children, size = '30px' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navLinks, setNavLinks] = useState([]);
  const { user } = useSelector(getUserData);
  console.log('nav menu', user);
  function handleToggleSideBar() {
    setIsOpen(!isOpen);
  }
  function handleCloseSideBarByClickOnBackdrop(ev) {
    const { target, currentTarget } = ev;

    if (target !== currentTarget) return;

    setIsOpen(false);
  }

  const CTX = {
    handleToggleSideBar,
    isOpen,
  };

  useEffect(() => {
    // const pagesRoutesArr = pagesRoutes.filter(el => el?.roles.includes(user?.role) && el?.status.includes(user?.status));
    function handleCloseSideBar(ev) {
      let { code } = ev;
      if (code === 'Escape') {
        setIsOpen(false);
        window.removeEventListener('click', handleCloseSideBar);
        return;
      }
    }

    window.addEventListener('click', handleCloseSideBar);

    setNavLinks([]);

    return () => {
      window.removeEventListener('click', handleCloseSideBar);
    };
  }, []);

  return (
    <SideBarCTX.Provider value={CTX}>
      {children}
      <Portal id="navMenu">
        <div className={isOpen ? s.backdropOpen : s.backdrop} onClick={handleCloseSideBarByClickOnBackdrop}>
          <div className={[s.menuContainer, 'theme'].join(' ')}>
            {isOpen && (
              <ul className={s.menu}>
                <AccordeonItem title="Створити">
                  <CreateActions />
                </AccordeonItem>
                <AccordeonItem title="Транзакції">
                  <CreateActions />
                </AccordeonItem>
                <AccordeonItem title="Навігація">
                  {navLinks.map(link => (
                    <MenuNavLink key={link.path} item={link} />
                  ))}
                </AccordeonItem>
                <AccordeonItem title="Звіти">
                  <CreateActions />
                </AccordeonItem>
                <AccordeonItem title="Налаштування">
                  <CreateActions />
                </AccordeonItem>
              </ul>
            )}

            <div className={s.footer}>
              <Button onClick={handleToggleSideBar}>
                <span className={s.btnName}>Сховати меню</span>
                <SvgIcon iconId={iconId.arrowDown} size="24px" className={s.icon} />
              </Button>

              <Button onClick={() => {}}>
                <span className={s.btnName}>Вихід</span>
                <SvgIcon iconId={iconId.logOut} size="24px" className={s.iconExit} />
              </Button>
            </div>
          </div>
        </div>
      </Portal>
    </SideBarCTX.Provider>
  );
};

export default SideBar;
