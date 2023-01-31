import React, { useEffect } from 'react';
import AccordeonItem from 'components/AccordeonItem/AccordeonItem';
import CreateActions from '../CreateActions/CreateActions';
import { useSideBar } from '../SideBar';

// import s from './SideBarMenu.module.scss';
const SideBarMenu = () => {
  const { handleToggleSideBar } = useSideBar();

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
      <AccordeonItem title="Створити">
        <CreateActions />
      </AccordeonItem>
      <AccordeonItem title="Транзакції">
        <CreateActions />
      </AccordeonItem>
      <AccordeonItem title="Навігація"></AccordeonItem>
      <AccordeonItem title="Звіти">
        <CreateActions />
      </AccordeonItem>
      <AccordeonItem title="Налаштування">
        <CreateActions />
      </AccordeonItem>
      <AccordeonItem title="Далі буде..."></AccordeonItem>
    </>
  );
};

export default SideBarMenu;
