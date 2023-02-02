import { useState } from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { iconId } from 'data';

import s from './AccordeonItem.module.scss';

const AccordeonItem = ({
  children,
  maxHeihgt = '32px',
  title = 'Інформація',
  toggled = true,
  open = false,
  className = '',
  InnerComp = () => null,
}) => {
  const [isOpen, setIsOpen] = useState(open);

  function handleToggleOpen() {
    if (!toggled) return;
    setIsOpen(!isOpen);
  }
  return (
    <div className={isOpen ? s.isOpenItem : s.isCloseItem} style={{ maxHeight: isOpen ? '100%' : maxHeihgt }}>
      <ButtonIcon
        iconId={toggled && iconId.arrowDown}
        className={[s.btn, className].join(' ')}
        iconClassName={s.icon}
        onClick={handleToggleOpen}
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
