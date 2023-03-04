import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { statusSetMap } from 'data';

import s from './Status.module.scss';

const Status = ({ status, variant = null }) => {
  let statusData = statusSetMap[status] || statusSetMap.noStatus;
  const { color, text, name, iconId, descr, styles = {} } = statusData;

  const style = {
    color: color,
    fill: color,
    borderColor: variant === 'outlined' ? color : 'transparent',
    ...styles,
  };

  return (
    <div className={[s.statusBox, s[name]].join(' ')} style={style} title={descr}>
      {iconId && <SvgIcon iconId={iconId} size="20px" />}

      <span className={s.inner}>{text || name}</span>
    </div>
  );
};

export default Status;
