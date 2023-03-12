import React, { useEffect, useState } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { iconId } from 'data';
import s from './SideBarOptions.module.scss';
import ModalContent from 'components/ModalContent/ModalContent';

const SideBarOptions = ({ handleOptionsState, options, isOpen, title }) => {
  const [disableForClose, setDisableForClose] = useState(false);

  function handleCloseMenu(_ev) {
    handleOptionsState();
  }
  function beforeOpen(isModalOpen) {
    console.log('beforeOpen', 'isModalOpen', isModalOpen);
    setDisableForClose(true);
  }
  function afterClose(isModalOpen) {
    console.log('afterClose', 'isModalOpen', isModalOpen);
    // setDisableForClose(false);
  }

  useEffect(() => {
    if (disableForClose) {
      console.log('disableForClose', disableForClose);
      return;
    }

    function onMenuClose(ev) {
      const { target, code } = ev;
      // if (disableForClose) return;

      console.log('CLOSED SIDEBAR OPTIONS');
      if (!target.closest('[data-sidebar]')) return handleOptionsState();
      if (code === 'Escape') return handleOptionsState();
    }
    window.addEventListener('click', onMenuClose);
    window.addEventListener('keydown', onMenuClose);

    return () => {
      window.removeEventListener('click', onMenuClose);
      window.removeEventListener('keydown', onMenuClose);
    };
  }, [disableForClose, handleOptionsState]);

  return (
    <div className={[s.rightSide, isOpen && options && s.isShown].join(' ')}>
      <div className={s.rightSideContainer}>
        <header className={s.rightSideHeader}>
          <div className={s.title}>{title}</div>

          <ButtonIcon iconSize="18px" size="22px" iconId={iconId.close} variant="text" onClick={handleCloseMenu} />
        </header>

        <ul className={s.options}>
          {options &&
            options.map(item => {
              const { ModalChildren, modalChildrenProps, title } = item;
              // console.log(modalChildrenProps);
              return (
                <li key={item?.title}>
                  {ModalChildren && (
                    <ModalContent
                      beforeOpen={beforeOpen}
                      afterOpen={isModalOpen => {
                        console.log('afterOpen', 'isModalOpen', isModalOpen);
                      }}
                      beforeClose={isModalOpen => {
                        console.log('beforeClose', 'isModalOpen', isModalOpen);
                      }}
                      afterClose={afterClose}
                      trigger={props => (
                        <ButtonIcon variant="pointerLeft" className={s.option} {...props}>
                          {title}
                        </ButtonIcon>
                      )}
                    >
                      <ModalChildren {...modalChildrenProps} />
                    </ModalContent>
                  )}

                  {/* <ButtonIcon variant="pointerLeft" className={s.option}>
                    {item?.title}
                  </ButtonIcon> */}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default SideBarOptions;
