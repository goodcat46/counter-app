import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { iconId } from 'data';

import React, { useEffect, useState } from 'react';
import s from './QuickActions.module.scss';

const QuickActions = () => {
  const [isShown, setIsShown] = useState(false);
  function onMenuBtnClick(ev) {
    setIsShown(!isShown);
  }

  useEffect(() => {
    function onMenuClose(ev) {
      const { target, code } = ev;
      if (!target.closest('[data-burger]')) setIsShown(false);
      if (code === 'Escape') setIsShown(false);
    }
    window.addEventListener('click', onMenuClose);
    window.addEventListener('keydown', onMenuClose);

    return () => {
      window.removeEventListener('click', onMenuClose);
      window.removeEventListener('keydown', onMenuClose);
    };
  }, []);

  return (
    <div className={isShown ? s.shownActions : s.actions} data-burger>
      <div className={s.actionsList}>
        <div className={s.top}>
          <ButtonIcon
            iconId={iconId.edit}
            variant="text"
            size="28px"
            iconSize="80%"
            tabIndex={isShown ? -1 : 0}
            onClick={onMenuBtnClick}
          />
          <ButtonIcon
            iconId={iconId.copy}
            variant="text"
            size="28px"
            iconSize="80%"
            tabIndex={isShown ? -1 : 0}
            onClick={onMenuBtnClick}
          />
          <ButtonIcon
            iconId={iconId.delete}
            variant="text"
            size="28px"
            iconSize="90%"
            tabIndex={isShown ? -1 : 0}
            onClick={onMenuBtnClick}
          />
        </div>
        <div className={s.bottom}>
          <ButtonIcon
            iconId={iconId.plus}
            variant="filled"
            size="28px"
            iconSize="80%"
            tabIndex={isShown ? -1 : 0}
            onClick={onMenuBtnClick}
          />
          <ButtonIcon
            iconId={iconId.TRANSFER}
            variant="filled"
            size="28px"
            iconSize="80%"
            tabIndex={isShown ? -1 : 0}
            onClick={onMenuBtnClick}
          />
          <ButtonIcon
            iconId={iconId.minus}
            variant="filled"
            size="28px"
            iconSize="80%"
            tabIndex={isShown ? -1 : 0}
            onClick={onMenuBtnClick}
          />
        </div>
      </div>

      <ButtonIcon
        iconId={isShown ? iconId.close : iconId.actionsV}
        className={s.toggleBtn}
        iconSize="70%"
        size="48px"
        onClick={onMenuBtnClick}
      />
    </div>
  );
};

export default QuickActions;
