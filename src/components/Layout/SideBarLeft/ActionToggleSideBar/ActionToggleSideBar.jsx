import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { iconId } from 'data';
import { useSideBar } from '../SideBarProvider';

const ActionToggleSideBar = () => {
  const { isOpen, onTogglerClick } = useSideBar();

  return (
    <ButtonIcon
      iconId={isOpen ? iconId.burgerOpen : iconId.burger}
      size="30px"
      iconSize="80%"
      variant="text"
      onClick={onTogglerClick}
    />
  );
};

export default ActionToggleSideBar;
