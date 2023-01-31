import React, { createContext, useContext, useState } from 'react';

import Portal from 'components/Portal/Portal';
import { iconId } from 'data';

import { Button } from '@mui/material';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './SideBar.module.scss';
import UserMenu from '../UserMenu/UserMenu';
import SideBarMenu from './SideBarMenu/SideBarMenu';

export const SideBarCTX = createContext();
export const useSideBar = () => useContext(SideBarCTX);

const SideBar = ({ children, size = '30px' }) => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <SideBarCTX.Provider value={CTX}>
      {children}
      <Portal id="navMenu">
        <div className={isOpen ? s.backdropOpen : s.backdrop} onClick={handleCloseSideBarByClickOnBackdrop}>
          <div className={[s.menuContainer, 'theme'].join(' ')}>
            <div className={s.header}>
              <UserMenu />
            </div>

            <div className={s.overflow}>{isOpen && <SideBarMenu />}</div>

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
