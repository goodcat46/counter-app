import React, { useEffect } from 'react';
import AccordeonItem from 'components/AccordeonItem/AccordeonItem';
import CreateActions from '../CreateActions/CreateActions';
import { useSideBar } from '../SideBar';
import Directories from 'components/Layout/SideBar/Directories/Directories';
import NavMenu from '../NavMenu/NavMenu';
import Raports from '../Raports/Raports';

import s from './SideBarMenu.module.scss';

const SideBarMenu = ({ isOpen = false }) => {
  const { handleToggleSideBar } = useSideBar();
  const renderItems = [
    { title: 'Загальна інформація', Item: null, open: false },
    { title: 'Навігація', Item: NavMenu, open: true },
    { title: 'Створити', Item: CreateActions, open: false },
    { title: 'Довідники', Item: Directories, open: false },
    { title: 'Звіти', Item: Raports, open: false },
    { title: 'Налаштування', Item: null, open: false },
    { title: 'Далі буде...', Item: null, open: false },
  ];

  useEffect(() => {
    function handleCloseSideBar(ev) {
      let { code } = ev;
      if (code === 'Escape') {
        handleToggleSideBar();
        window.removeEventListener('keydown', handleCloseSideBar);
        return;
      }
    }

    window.addEventListener('keydown', handleCloseSideBar);
    document.querySelector('body').classList.add('NotScroll');

    return () => {
      window.removeEventListener('keydown', handleCloseSideBar);
      document.querySelector('body').classList.remove('NotScroll');
    };
  }, [handleToggleSideBar]);
  return (
    <>
      {isOpen && (
        <div className={s.sideBarMenu}>
          {renderItems.map(({ title, Item, open, ...props }) => (
            <AccordeonItem key={title} {...{ ...props, title, open }}>
              {Item && <Item />}
            </AccordeonItem>
          ))}
        </div>
      )}
    </>
  );
};

export default SideBarMenu;
