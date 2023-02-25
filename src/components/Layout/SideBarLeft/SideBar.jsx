import React, { useState } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import SideBarOptions from './SideBarOptions/SideBarOptions';
import { iconId } from 'data';
import { directories, raports } from 'data';

import s from './SideBar.module.scss';
import { toast } from 'react-toastify';

const sideBarButtons = [
  { iconId: iconId.folder, options: directories, title: 'Довідники' },
  { iconId: iconId.assignmentOk, options: raports, title: 'Звіти' },
  { iconId: iconId.info, options: [], title: 'Інфо' },
  { iconId: iconId.settings, options: [], title: 'Налаштування' },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [options, setOptions] = useState(null);

  function onTogglerClick() {
    setIsOpen(!isOpen);
    handleOptionsState();
  }

  function handleOptionsState(newOptions) {
    if (!newOptions) {
      return setOptions(null);
    }
    setOptions(prev => (prev === newOptions ? null : newOptions));
  }

  return (
    <div className={s.layoutGrid}>
      <div className={[s.sideBar, isOpen && s.isOpen].join(' ')} data-sidebar>
        <button className={s.toggler} onClick={onTogglerClick}></button>

        <div className={s.container}>
          <div className={s.content}>
            <div className={s.top}>
              <ButtonIcon iconSize="20px" size="36px" iconId={iconId.person} variant="text" />
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
                iconId={iconId.logOut}
                variant="text"
                onClick={() => toast.success('Вихід із програми')}
              />
            </div>
          </div>

          <SideBarOptions {...{ handleOptionsState, ...options, isOpen }} />
        </div>
      </div>
      <div className={s.children}>{children}</div>
    </div>
  );
};

export default SideBar;
