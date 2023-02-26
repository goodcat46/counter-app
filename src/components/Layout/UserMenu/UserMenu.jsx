import { useEffect, useState } from 'react';
import { iconId } from 'data';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import UserInfo from './UserInfo/UserInfo';

import s from './UserMenu.module.scss';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    function onMenuClose(ev) {
      const { target, code } = ev;
      if (!target.closest('[data-user-menu]')) setIsOpen(false);
      if (code === 'Escape') setIsOpen(false);
    }
    window.addEventListener('click', onMenuClose);
    window.addEventListener('keydown', onMenuClose);

    return () => {
      window.removeEventListener('click', onMenuClose);
      window.removeEventListener('keydown', onMenuClose);
    };
  }, []);

  return (
    <div className={[s.backdrop, isOpen && s.isOpen].join(' ')} data-user-menu>
      <ButtonIcon
        iconId={iconId.person}
        size="30px"
        iconSize="80%"
        className={s.openButton}
        onClick={handleToggleMenu}
      />

      <UserInfo className={[s.list, 'theme'].join(' ')} />
    </div>
  );
};

export default UserMenu;
