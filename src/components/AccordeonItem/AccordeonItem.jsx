import { useState } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { iconId } from 'data';

import s from './AccordeonItem.module.scss';

const AccordeonItem = ({ children, title = 'Інформація', toggled = true, open = false }) => {
  const [isOpen, setIsOpen] = useState(open);

  function handleToggleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={isOpen ? s.isOpenItem : s.isCloseItem}>
      <ButtonIcon
        iconId={toggled && iconId.arrowDown}
        className={s.btn}
        iconClassName={s.icon}
        onClick={toggled ? handleToggleOpen : null}
        disabled={!children && true}
      >
        {title}
      </ButtonIcon>

      <div className={s.contentBox}>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );
};

export default AccordeonItem;
