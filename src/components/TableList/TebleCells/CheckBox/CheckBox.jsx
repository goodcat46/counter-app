import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { iconId } from 'data';

import s from './CheckBox.module.scss';

const CheckBox = ({ onChange, id = '1', checked = false }) => {
  return (
    <label className={[s.ChekBox, checked && s.checked].join(' ')}>
      <input className="visually-hidden" type="checkbox" onChange={onChange} />

      <SvgIcon size="22px" iconId={checked ? iconId.checkBoxOn : iconId.checkBoxOff} />
    </label>
  );
};

export default CheckBox;
