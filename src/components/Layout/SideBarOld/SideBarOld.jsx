import React, { createContext, useContext, useState } from 'react';

import Portal from 'components/Portal/Portal';
import { iconId } from 'data';

import { Button } from '@mui/material';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './SideBarOld.module.scss';
import UserMenu from '../UserMenu/UserMenu';
import SideBarOldMenu from './SideBarOldMenu/SideBarOldMenu';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

export const SideBarOldCTX = createContext();
export const useSideBarOldOld = () => useContext(SideBarOldCTX);

const SideBarOld = ({ children, size = '30px' }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleSideBarOld() {
    setIsOpen(!isOpen);
  }
  function handleCloseSideBarOldByClickOnBackdrop(ev) {
    const { target, currentTarget } = ev;

    if (target !== currentTarget) return;

    setIsOpen(false);
  }

  const CTX = {
    handleToggleSideBarOld,
    isOpen,
  };

  return (
    <SideBarOldCTX.Provider value={CTX}>
      {children}
      <Portal id="navMenu">
        <div className={isOpen ? s.backdropOpen : s.backdrop} onClick={handleCloseSideBarOldByClickOnBackdrop}>
          <div className={[s.menuContainer, 'theme'].join(' ')}>
            <div className={s.header}>
              <UserMenu />
            </div>

            {isOpen && <SideBarOldMenu isOpen />}

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
              onClick={handleToggleSideBarOld}
            ></ButtonIcon>
          </div>
        </div>
      </Portal>
    </SideBarOldCTX.Provider>
  );
};

export default SideBarOld;
