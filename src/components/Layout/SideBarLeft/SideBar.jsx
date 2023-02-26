import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import SideBarOptions from './SideBarOptions/SideBarOptions';
import ToggleThemeMode from './ChangeTheme/ChangeTheme';
import ActionAppExit from './ActionAppExit';
import { useSideBar } from './SideBarProvider';

import s from './SideBar.module.scss';

const SideBar = () => {
  const { isOpen, options, onTogglerClick, handleOptionsState, sideBarButtons, settingsOptionsItem } = useSideBar();

  return (
    <div className={[s.sideBar, isOpen && s.isOpen].join(' ')} data-sidebar>
      <button className={s.toggler} onClick={onTogglerClick}></button>

      <div className={s.container}>
        <div className={s.content}>
          <div className={s.top}>
            <ToggleThemeMode />
          </div>

          <div className={s.menu}>
            {sideBarButtons.map(item => (
              <ButtonIcon
                key={item?.iconId}
                iconId={item?.iconId}
                iconSize="20px"
                size="36px"
                variant="pointerLeft"
                className={item?.title === options?.title && s.isActive}
                onClick={() => handleOptionsState(item)}
              />
            ))}
          </div>

          <div className={s.bottom}>
            <ButtonIcon
              iconSize="20px"
              size="36px"
              iconId={settingsOptionsItem.iconId}
              variant="pointerLeft"
              className={settingsOptionsItem.title === options?.title && s.isActive}
              onClick={() => handleOptionsState(settingsOptionsItem)}
            />

            <ActionAppExit />
          </div>
        </div>

        <SideBarOptions {...{ handleOptionsState, ...options, isOpen }} />
      </div>
    </div>
  );
};

export default SideBar;
