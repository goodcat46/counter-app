import React, { useEffect } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { iconId } from 'data';
import s from './SideBarOptions.module.scss';

const SideBarOptions = ({ handleOptionsState, options, isOpen, title }) => {
  useEffect(() => {
    function onMenuClose(ev) {
      const { target, code } = ev;
      if (!target.closest('[data-sidebar]')) handleOptionsState();
      if (code === 'Escape') handleOptionsState();
    }
    window.addEventListener('click', onMenuClose);
    window.addEventListener('keydown', onMenuClose);

    return () => {
      window.removeEventListener('click', onMenuClose);
      window.removeEventListener('keydown', onMenuClose);
    };
  }, [handleOptionsState]);

  return (
    <div className={[s.rightSide, isOpen && options && s.isShown].join(' ')}>
      <div className={s.rightSideContainer}>
        <header className={s.rightSideHeader}>
          <div className={s.title}>{title}</div>

          <ButtonIcon
            iconSize="18px"
            size="22px"
            iconId={iconId.close}
            variant="outlined"
            onClick={() => handleOptionsState()}
          />
        </header>

        <ul className={s.options}>
          {options &&
            options.map(el => (
              <li key={el?.title}>
                <ButtonIcon
                  className={s.option}
                  // onClick={() => handleOptionsState()}
                >
                  {el?.title}
                </ButtonIcon>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBarOptions;
