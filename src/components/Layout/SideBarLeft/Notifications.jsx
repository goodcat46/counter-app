import React from 'react';
import ButtonIcon, { ButtonIconVariants } from 'components/ButtonIcon/ButtonIcon';
import { iconId } from 'data';
import { useModalProvider } from 'components/ModalProvider/ModalProvider';
import ModalDefault from 'components/ModalDefault/ModalDefault';

const OpenNotifications = () => {
  const modal = useModalProvider();
  return (
    <ButtonIcon
      iconSize="20px"
      styles={{ width: '100%', height: '32px' }}
      iconId={iconId.notifications}
      variant={ButtonIconVariants.pointerLeft}
      // className={settingsOptionsItem.title === options?.title && s.isActive}
      onClick={() => {
        modal.handleOpenModal({
          ModalChildren: ModalDefault,
          modalChildrenProps: { title: 'Сповіщення' },
        });
      }}
    />
  );
};

export default OpenNotifications;
