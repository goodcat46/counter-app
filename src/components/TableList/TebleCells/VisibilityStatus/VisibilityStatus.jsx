import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import s from './VisibilityStatus.module.scss';

const VisibilityStatus = ({ status }) => {
  const className = [s.statusBox, status ? s.visible : s.hidden].join(' ');
  const text = status ? 'Видимий' : 'Прихований';

  const iconId = status ? 'visibility-on' : 'visibility-off';

  return (
    <div className={className}>
      <SvgIcon iconId={iconId} size="18px" />
      <span>{text}</span>
    </div>
  );
};

export default VisibilityStatus;
