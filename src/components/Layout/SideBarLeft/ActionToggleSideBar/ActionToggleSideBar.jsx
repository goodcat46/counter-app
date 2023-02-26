import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { iconId } from 'data';
import { useSideBar } from '../SideBarProvider';

const ActionToggleSideBar = () => {
  const { isOpen, onTogglerClick } = useSideBar();

  return (
    <ButtonIcon
      iconId={isOpen ? iconId.arrowLeft : iconId.arrowRight}
      size="30px"
      iconSize="80%"
      onClick={onTogglerClick}
    />
  );
};

export default ActionToggleSideBar;
