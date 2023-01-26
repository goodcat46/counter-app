import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { statusData } from 'data';

import s from './Status.module.scss';
const Status = ({ status }) => {
  const compStatus = statusData?.name[status] ? status : 'default';
  const className = [s.statusBox, s[compStatus]].join(' ');

  return (
    <div className={className} title={statusData?.name[compStatus]}>
      {statusData?.iconId[compStatus] && <SvgIcon iconId={statusData?.iconId[compStatus]} size="18px" />}
      <span className={s.inner}>{statusData?.name[compStatus]}</span>
    </div>
  );
};

export default Status;
