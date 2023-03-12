import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import SideBarOptions from './SideBarOptions/SideBarOptions';
import ToggleThemeMode from './ChangeTheme/ChangeTheme';
import ActionAppExit from './ActionAppExit';
import { useSideBar } from './SideBarProvider';
import OpenNotifications from './Notifications';
import styled from 'styled-components';
import theme from 'theme/theme';

import s from './SideBar.module.scss';

const SideBar = () => {
  const {
    isOpen,
    options,
    onTogglerClick,
    handleOptionsState,
    sideBarButtons = [],
    settingsOptionsItem,
  } = useSideBar();

  return (
    <div className={[s.SideBar, isOpen && s.isOpen].join(' ')} data-sidebar>
      <MenuToggler isOpen={isOpen} onClick={onTogglerClick}></MenuToggler>

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
                title={item?.title}
                iconSize="20px"
                variant="pointerLeft"
                className={[s.option, item?.title === options?.title && s.isActive].join(' ')}
                onClick={() => handleOptionsState(item)}
              />
            ))}
          </div>

          <div className={s.bottom}>
            <OpenNotifications />

            <ButtonIcon
              iconSize="20px"
              styles={{ width: '100%', height: '32px' }}
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

const MenuToggler = styled.button`
  width: 4px;
  height: 100%;
  padding: 0;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;

  border-style: none;

  background-color: ${({ isOpen }) => (isOpen ? theme.dark.trBorderClr : theme.dark.backgroundColorBlack)};
`;

export default SideBar;
