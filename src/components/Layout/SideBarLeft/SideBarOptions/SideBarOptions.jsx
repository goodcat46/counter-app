import React, { useEffect } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useModalProvider } from 'components/ModalProvider/ModalProvider';
import { iconId } from 'data';
import s from './SideBarOptions.module.scss';

const SideBarOptions = ({ handleOptionsState, options, isOpen, title }) => {
  const modal = useModalProvider();

  function handleCloseMenu(_ev) {
    handleOptionsState();
  }
  function beforeOpen(_isModalOpen) {
    // console.log('beforeOpen', 'isModalOpen', isModalOpen);
  }
  function afterOpen(_isModalOpen) {
    // console.log('afterOpen', 'isModalOpen', isModalOpen);
  }
  function afterClose(_isModalOpen) {
    // console.log('afterClose', 'isModalOpen', isModalOpen);
    // setDisableForClose(false);
  }
  function beforeClose(_isModalOpen) {
    // console.log('beforeClose', 'isModalOpen', isModalOpen);
  }

  useEffect(() => {
    if (modal.isOpen) return;
    if (!options) return;

    function onMenuClose(ev) {
      if (modal.isOpen) return;
      const { target, code } = ev;
      if (!target.closest('[data-sidebar]')) return handleOptionsState();
      if (code === 'Escape') return handleOptionsState();
      console.log('FROM SIDEBAR OPTIONS');
    }
    const rootEl = document.getElementById('root');

    rootEl.addEventListener('click', onMenuClose);
    rootEl.addEventListener('keydown', onMenuClose);

    return () => {
      rootEl.removeEventListener('click', onMenuClose);
      rootEl.removeEventListener('keydown', onMenuClose);
    };
  }, [handleOptionsState, modal.isOpen, options]);

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
                  {/* {ModalChildren && (
                    <ModalContent
                      beforeOpen={beforeOpen}
                      afterOpen={afterOpen}
                      beforeClose={beforeClose}
                      afterClose={afterClose}
                      trigger={props => (
                        <ButtonIcon variant="pointerLeft" className={s.option} {...props}>
                          {title}
                        </ButtonIcon>
                      )}
                    >
                      <ModalChildren {...modalChildrenProps} />
                    </ModalContent>
                  )} */}

                  <ButtonIcon
                    variant="pointerLeft"
                    className={s.option}
                    onClick={() => {
                      modal.handleOpenModal({
                        ModalChildren,
                        modalChildrenProps: { ...modalChildrenProps, beforeOpen, afterOpen, beforeClose, afterClose },
                      });
                    }}
                  >
                    {title}
                  </ButtonIcon>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default SideBarOptions;
