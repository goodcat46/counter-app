import React, { useEffect } from 'react';
import AccordeonItem from 'components/AccordeonItem/AccordeonItem';
import CreateActions from '../CreateActions/CreateActions';
import { useSideBar } from '../SideBar';
import Directories from 'components/Layout/SideBar/Directories/Directories';
import NavMenu from '../NavMenu/NavMenu';
import Raports from '../Raports/Raports';

// import s from './SideBarMenu.module.scss';
const SideBarMenu = () => {
  const { handleToggleSideBar } = useSideBar();
  const renderItems = [
    { title: 'Загальна інформація', Item: null },
    { title: 'Навігація', Item: NavMenu },
    { title: 'Створити', Item: CreateActions },
    { title: 'Довідники', Item: Directories },
    { title: 'Звіти', Item: Raports },
    { title: 'Налаштування', Item: null },
    { title: 'Далі буде...', Item: null },
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
      {renderItems.map(({ title, Item, ...props }) => (
        <AccordeonItem key={title} {...{ ...props, title }}>
          {Item && <Item />}
        </AccordeonItem>
      ))}
      {/* <AccordeonItem title="Навігація">
        <NavMenu />
      </AccordeonItem>
      <AccordeonItem title="Створити">
        <CreateActions />
      </AccordeonItem>
      <AccordeonItem title="Транзакції"></AccordeonItem>
      <AccordeonItem title="Довідники">
        <Directories />
      </AccordeonItem>
      <AccordeonItem title="Звіти">
        <Raports />
      </AccordeonItem>
      <AccordeonItem title="Налаштування"></AccordeonItem>
      <AccordeonItem title="Далі буде..."></AccordeonItem> */}
    </>
  );
};

export default SideBarMenu;
