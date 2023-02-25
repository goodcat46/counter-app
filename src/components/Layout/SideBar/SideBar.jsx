import React, { createContext, useContext, useState } from 'react';

import Portal from 'components/Portal/Portal';
import { iconId } from 'data';

import { Button } from '@mui/material';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './SideBar.module.scss';
import UserMenu from '../UserMenu/UserMenu';
import SideBarMenu from './SideBarMenu/SideBarMenu';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

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

            {isOpen && <SideBarMenu isOpen />}

            <div className={s.footer}>
              <Button size="small" onClick={() => {}}>
                <div className={s.btnInner}>
                  <span>Вихід</span>
                  <SvgIcon iconId={iconId.logOut} size="24px" svgClass={s.iconExit} />
                </div>
              </Button>
            </div>

            <ButtonIcon
              styleType="BrandClrBtn"
              iconId={iconId.arrowDown}
              className={[s.toggleMenu, isOpen && s.open].join(' ')}
              iconClassName={isOpen ? s.iconLeft : s.iconRight}
              iconSize="40px"
              onClick={handleToggleSideBar}
            ></ButtonIcon>
          </div>
        </div>
      </Portal>
    </SideBarCTX.Provider>
  );
};

export default SideBar;
