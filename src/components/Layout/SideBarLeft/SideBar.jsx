import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { iconId } from 'data';
import React, { useState } from 'react';

import s from './SideBar.module.scss';

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  function onTogglerClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={s.layoutGrid}>
      <div className={[s.sideBar, isOpen && s.isOpen].join(' ')}>
        <button className={s.toggler} onClick={onTogglerClick}></button>
        <div className={s.container}>
          <div className={s.content}>
            <div className={s.top}>
              <ButtonIcon iconSize="24px" size="44px" iconId={iconId.person} variant="text" />
            </div>

            <div className={s.menu}>
              <ButtonIcon iconId={iconId.info} iconSize="24px" size="44px" variant="pointerLeft" />
              <ButtonIcon iconId={iconId.info} iconSize="24px" size="44px" variant="pointerLeft" />
              <ButtonIcon iconId={iconId.info} iconSize="24px" size="44px" variant="pointerLeft" />
              <ButtonIcon iconId={iconId.info} iconSize="24px" size="44px" variant="pointerLeft" />
            </div>

            <div></div>
          </div>
        </div>
      </div>
      <div className={s.children}>{children}</div>
    </div>
  );
};

export default SideBar;
